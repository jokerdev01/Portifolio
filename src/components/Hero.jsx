function Hero() {

    return (
        <section id="home" className="relative h-screen overflow-hidden bg-[#01031F]">

            {/* Área da imagem do Hero */}
            <div className="absolute top-0 left-0 right-[0vh] h-[130vh] z-0">

                <img
                    src="/img/WhatsApp Image 2026-09-09 at 12.08.51.jpeg"
                    className="w-full h-full object-cover opacity-90"
                />

                {/* Gradiente da imagem para #01031F */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent 30%, #01031F 75%, #01031F 100%)"
                    }}
                ></div>

            </div>

            {/* Seta indicando que existe conteúdo abaixo */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />

                </svg>

            </div>

        </section>
    )
}

export default Hero