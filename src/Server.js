import express from "express";
import { spawn, exec } from "node:child_process";
import cors from "cors";
import process from "node:process";
import fs from "node:fs";
import path from "node:path";

const app = express();
app.use(cors());
app.use(express.json());

// Mapeamento dos projetos configurados no teu computador
const projectCommands = {
  1: {
    command: "npm",
    args: ["run", "dev"],
    // Caminho da pasta que contém diretamente o ficheiro package.json:
    path: path.normalize("./Iphone-main/iphone"),
    port: 5173,
  },
  // Podes adicionar mais projetos seguindo o mesmo padrão:
  // 2: {
  //   command: "npm",
  //   args: ["run", "dev"],
  //   path: path.normalize("C:/Users/lucas/OneDrive/Documentos/OutroProjeto"),
  //   port: 3000,
  // },
};

// Guarda instâncias de processos em execução
const runningProcesses = {};

// ROTA: Iniciar Projeto
app.post("/start-project/:id", (req, res) => {
  const { id } = req.params;
  const proj = projectCommands[id];

  if (!proj) {
    return res.status(404).json({ error: "Projeto não configurado" });
  }

  if (!fs.existsSync(proj.path)) {
    console.error(`[ERRO]: Pasta não encontrada: ${proj.path}`);
    return res.status(400).json({ error: "Diretório não encontrado no disco" });
  }

  if (runningProcesses[id]) {
    console.log(`[Projeto ${id}] já está ativo.`);
    return res.json({
      status: "Já em execução",
      url: `http://localhost:${proj.port}`,
    });
  }

  console.log(`\n========================================`);
  console.log(`Iniciando Projeto ${id}: ${proj.command} ${proj.args.join(" ")}`);
  console.log(`Diretório: ${proj.path}`);
  console.log(`========================================\n`);

  const child = spawn(proj.command, proj.args, {
    cwd: proj.path,
    shell: true,
    env: process.env,
    stdio: "inherit",
  });

  runningProcesses[id] = child;

  child.on("error", (err) => {
    console.error(`[Projeto ${id} Falha ao iniciar]:`, err.message);
    delete runningProcesses[id];
  });

  child.on("exit", (code) => {
    console.log(`[Projeto ${id}] finalizado com código ${code}`);
    delete runningProcesses[id];
  });

  return res.json({
    status: "Iniciando",
    url: `http://localhost:${proj.port}`,
  });
});

// ROTA: Parar Projeto e Libertar Porta no Windows
app.post("/stop-project/:id", (req, res) => {
  const { id } = req.params;
  const proj = projectCommands[id];

  if (!proj) {
    return res.status(404).json({ error: "Projeto não configurado" });
  }

  console.log(`\nA encerrar Projeto ${id} e a libertar a porta ${proj.port}...`);

  // 1. Encerra o processo registado via PID (se ainda existir)
  const child = runningProcesses[id];
  if (child && child.pid) {
    exec(`taskkill /pid ${child.pid} /T /F`, () => {});
  }
  delete runningProcesses[id];

  // 2. Garante o fecho localizando qualquer processo que ainda ocupe a porta
  const findPidCommand = `netstat -ano | findstr :${proj.port}`;

  exec(findPidCommand, (err, stdout) => {
    if (err || !stdout) {
      console.log(`Porta ${proj.port} já se encontra totalmente livre.`);
      return res.json({ status: "Porta livre", port: proj.port });
    }

    const lines = stdout.trim().split("\n");
    const pids = new Set();

    lines.forEach((line) => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== "0") {
        pids.add(pid);
      }
    });

    if (pids.size === 0) {
      console.log(`Nenhum processo pendente na porta ${proj.port}.`);
      return res.json({ status: "Livre" });
    }

    pids.forEach((pid) => {
      console.log(`A encerrar PID ${pid} que ocupava a porta ${proj.port}...`);
      exec(`taskkill /F /PID ${pid}`, () => {});
    });

    return res.json({ status: "Porta libertada", port: proj.port });
  });
});

app.listen(3001, () => {
  console.log("Servidor executor ativo na porta 3001!");
});