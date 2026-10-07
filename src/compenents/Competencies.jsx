function Competencies() {
  const cards = [
    {
      id: "01 -",
      title: "FRONT - END",
      borderColor: "border-l-blue-500",
      textColor: "text-blue-500",
      description: "Criação de interfaces modeernas, responsivas e intuitivas, com foco na experiencia do usuario",
      mainIcon: "/icons/Front.png",
      techs: [
        { name: "CSS", icon: "../../public/icons/CSS.png" },
        { name: "HTML", icon: "../../public/icons/HTML.png" },
        { name: "JavaScript", icon: "../../public/icons/JavaScript.png" },
        { name: "TypeScript", icon: "../../public/icons/TypeScript.png" },
        { name: "React", icon: "../../public/icons/React.png" },
      ],
    },
    {
      id: "02 -",
      title: "BACK - END",
      borderColor: "border-l-green-500",
      textColor: "text-green-500",
      description: "Desenvolvimento de aplicações, APIs e logica de negocio, seguindo boas praticas e arquitetura escalável.",
      mainIcon: "../../public/icons/Back.png",
      techs: [
        { name: "Node.js", icon: "../../public/icons/Node.png" },
        { name: "Java", icon: "../../public/icons/Java.png" },
        { name: "Python", icon: "../../public/icons/Python.png" },
        { name: "Git", icon: "../../public/icons/Git.png" },
        { name: "Rest-API", icon: "../../public/icons/Api.png" },
      ],
    },
    {
      id: "03 -",
      title: "DATABASE",
      borderColor: "border-l-purple-600",
      textColor: "text-purple-600",
      description: "Criação de interfaces modeernas, responsivas e intuitivas, com foco na experiencia do usuario",
      mainIcon: "../../public/icons/BD.png",
      techs: [
        { name: "MySQL", icon: "../../public/icons/MySQL.png" },
        { name: "Mongo-DB", icon: "../../public/icons/MongoDB.png" },
        { name: "Dynamo-DB", icon: "../../public/icons/Dynamo.png" },
      ],
    },
    {
      id: "04 -",
      title: "Cloud",
      borderColor: "border-l-amber-500",
      textColor: "text-amber-500",
      description: "Criação de interfaces modeernas, responsivas e intuitivas, com foco na experiencia do usuario",
      mainIcon: "../../public/icons/Aws.png",
      techs: [
        { name: "LAMBDA", icon: "../../public/icons/Lambda.png" },
        { name: "S3", icon: "../../public/icons/S3.png" },
        { name: "CloudFormation", icon: "../../public/icons/Cloud.png" },
      ],
    },
    {
      id: "05 -",
      title: "UX / UI",
      borderColor: "border-l-fuchsia-600",
      textColor: "text-fuchsia-600",
      description: "Criação de interfaces modeernas, responsivas e intuitivas, com foco na experiencia do usuario",
      mainIcon: "../../public/icons/design-ux.png",
      techs: [
        { name: "CSS", icon: "/icons/figma.png" },
        { name: "HTML", icon: "/icons/wireframe.png" },
        { name: "JavaScript", icon: "/icons/screen.png" },
      ],
    },
  ];

  return (
    <section id="competencias" className="bg-[#01031F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left">
          Competências
        </h2>

        {/* Linha 1 (3 cartões) e Linha 2 (2 cartões centralizados) */}
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-[#020517] border-0 border-l-4 md:border-l-[6px] ${card.borderColor} rounded-2xl p-6 w-full md:w-[380px] min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-xl`}
            >
              {/* Ícone no canto superior direito */}
              <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center">
                <img
                  src={card.mainIcon}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Textos */}
              <div className="pr-16 text-left">
                <span className={`text-sm font-semibold tracking-wider ${card.textColor}`}>
                  {card.id}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Badges de tecnologias */}
              <div className="flex flex-row items-center gap-2 pt-6 overflow-x-auto">
                {card.techs.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-1 min-w-[56px] max-w-[68px] h-[72px] bg-[#070b24] border border-gray-800 rounded-xl p-1.5 flex flex-col items-center justify-between"
                  >
                    <div className="h-8 w-8 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-gray-300 font-medium text-center truncate w-full">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competencies;