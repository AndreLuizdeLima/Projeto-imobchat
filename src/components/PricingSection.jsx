export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            description:
                "Plano ideal para pequenas imobiliárias que querem começar a automatizar o atendimento.",
            price: "R$ 100,00",
            period: "/mês",
            annual: "R$ 1.100,00 anual",
            features: [
                "Integração com sistemas imobiliários externos para importar e exibir seus imóveis no site",
                "Recebimento de leads via WhatsApp",
                "Até 200 leads por mês",
            ],
            cta: "Começar agora",
            highlighted: false,
        },
        {
            name: "Middle",
            description:
                "Para imobiliárias que buscam mais performance, suporte e personalização.",
            price: "Consulte valores",
            period: "",
            annual: "",
            features: [
                "Todas as vantagens do Starter",
                "Suporte humanizado em horário comercial",
                "Personalização da IA",
                "Até 400 leads por mês",
            ],
            cta: "Falar com um especialista",
            highlighted: true,
            badge: "Mais escolhido",
        },
        {
            name: "Pro",
            description:
                "Solução completa para imobiliárias que precisam escalar com liberdade total.",
            price: "Em breve",
            period: "",
            annual: "",
            features: [
                "Personalização completa da IA",
                "Integração com CRMs externos",
                "Leads ilimitados",
            ],
            cta: "Entrar na lista de espera",
            highlighted: false,
            disabled: true,
        },
    ]

    return (
        <section className="w-full py-20 px-4 bg-imob-white">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-imob-primary">
                    Nossos Planos
                </h2>
                <p className="mt-4 text-imob-dark max-w-2xl mx-auto">
                    Escolha o plano ideal para o momento da sua imobiliária e evolua conforme
                    seu crescimento.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 border bg-white shadow-sm flex flex-col
              ${plan.highlighted
                                ? "border-imob-primary shadow-lg scale-[1.02]"
                                : "border-gray-200"
                            }
            `}
                    >
                        {plan.badge && (
                            <span
                                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-imob-secondary text-white text-sm px-4 py-1 rounded-full">
                                {plan.badge}
                            </span>
                        )}

                        <h3 className="text-2xl font-semibold text-imob-primary">
                            {plan.name}
                        </h3>

                        <p className="mt-2 text-imob-dark text-sm">
                            {plan.description}
                        </p>

                        <div className="mt-6">
                            <span className="text-3xl font-bold text-imob-primary">
                                {plan.price}
                            </span>
                            <span className="text-imob-dark ml-1">{plan.period}</span>

                            {plan.annual && (
                                <p className="text-sm text-imob-dark mt-1">
                                    {plan.annual}
                                </p>
                            )}
                        </div>

                        <ul className="mt-6 space-y-3 text-left flex-1">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-imob-dark">
                                    <span className="text-imob-primary mt-1"><i
                                        className="fas fa-check"></i></span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            disabled={plan.disabled}
                            className={`mt-8 w-full py-3 rounded-xl font-medium transition
                ${plan.highlighted
                                    ? "bg-imob-primary text-white hover:bg-imob-secondary cursor-pointer "
                                    : plan.disabled
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-imob-dark text-white cursor-pointer hover:bg-imob-primary"
                                }
              `}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
