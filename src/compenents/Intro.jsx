import { GraduationCap, Code2, Database, Briefcase } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { useContext } from "react";

function Intro() {

     const { language } = useContext(LanguageContext);
    
     
    const t = translations[language];

    return (

        <section id="sobremim" className="bg-[#01031F] py-20 px-6">

            {/* Título e apresentação */}
            <div className="max-w-5xl mx-auto text-center">

                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                    {t.Intro.title}
                </h1>
 
                <p>
                    {t.Intro.description}
                </p>

            </div>


            {/* Container da timeline */}
            <div className="max-w-4xl mx-auto mt-20 relative">

                {/* Linha vertical */}
                <div className="absolute left-6 top-6 bottom-0 w-px bg-blue-500/30">
                </div>


                {/* Item da timeline */}
                <div className="relative flex items-start">

                    {/* Ícone formação */}
                    <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#01031F] text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">

                        <GraduationCap size={22} />

                    </div>


                    {/* Título e descrição */}
                    <div className="ml-6">

                        <h2 className="text-2xl font-semibold text-white">
                            {t.Intro.formation}
                        </h2>

                        <p className="mt-2 text-gray-400 leading-relaxed">
                            {t.Intro.descriptionFormation}
                        </p>

                    </div>
                 

                </div>

                  {/* Item da timeline */}
                <div className="relative flex items-start mt-10">

                     {/*Icone Conhecimento */}
                     <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#01031F] text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Code2 size={22} />
                    </div>


                    {/* Título e descrição */}
                    <div className="ml-6">

                        <h2 className="text-2xl font-semibold text-white">
                            {t.Intro.knowledge}
                        </h2>

                        <p className="mt-2 text-gray-400 leading-relaxed">
                            {t.Intro.descriptionKnowledge}
                        </p>

                    </div>

                </div>

                  {/* Item da timeline */}
                <div className="relative flex items-start mt-10">

                     {/*Icone experiencia */}
                     <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#01031F] text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Database size={22} />
                    </div>


                    {/* Título e descrição */}
                    <div className="ml-6">

                        <h2 className="text-2xl font-semibold text-white">
                            {t.Intro.experience}
                        </h2>

                        <p className="mt-2 text-gray-400 leading-relaxed">
                            {t.Intro.descriptionExperience}
                        </p>

                    </div>

                    </div>

                      {/* Item da timeline */}
                <div className="relative flex items-start mt-10">

                     {/*Icone desenvolvimento */}
                     <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#01031F] text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Briefcase size={22} />
                    </div>


                    {/* Título e descrição */}
                    <div className="ml-6">

                        <h2 className="text-2xl font-semibold text-white">
                            {t.Intro.indevelopment}
                        </h2>

                        <p className="mt-2 text-gray-400 leading-relaxed">
                            {t.Intro.descriptionIndevelopment}
                        </p>

                    </div>

                    </div>

            </div>

        </section>
    )
}

export default Intro