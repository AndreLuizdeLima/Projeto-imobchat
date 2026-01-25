import LoadingThreeDotsPulse from "./LoadingThreeDotsPulse.jsx";

const HowItWorks = () => {


    const steps = [{
        title: "Escolha seu plano",
        description: "Selecione o plano ideal para o seu negócio.",
        icon: "fa-regular fa-clipboard",
    }, {
        title: "Personalize seu chat",
        description: "Configure mensagens, cores e atendimento.",
        icon: "fa-regular fa-comments",
    }, {
        title: "Integre com seu site", description: "Instale facilmente com poucos cliques.", icon: "fa-solid fa-code",
    }, {
        title: "Receba leads", description: "Receba os leads direto no WhatsApp.", icon: "fa-brands fa-whatsapp",
    },];

    return (<section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-imob-primary ">
                Como funciona

            </h2>

            {/* Wrapper */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-16 min-h-55">

                <div className="hidden md:block absolute inset-0 items-center translate-y-14 z-0 pointer-events-none max-w-[80%] mx-auto ">
                    <LoadingThreeDotsPulse />
                </div>

                {/* Steps */}
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative z-10 flex flex-col items-center text-center max-w-55">

                        <div
                            className="w-16 h-16 flex items-center justify-center rounded-full bg-imob-primary text-white shadow-lg mb-5">
                            <i className={`${step.icon} text-xl`} />
                        </div>

                        <h3 className="font-semibold text-lg mb-2 text-imob-dark">
                            {step.title}
                        </h3>

                        <p className="text-sm text-imob-dark">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>);
};

export default HowItWorks;



