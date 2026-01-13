import React from 'react';
import MockChat from "./MockChat.jsx";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="min-h-[90vh] flex items-center bg-(--color-white)  pt-[30px] md:pt-[30px]">
            <div className="
                container mx-auto px-6
                grid grid-cols-1 md:grid-cols-2
                gap-12 items-center
                md:px-[80px]
            ">

                {/* TEXTO */}
                <div className="flex flex-col gap-6 text-center md:text-left ">
                    <h1 className="
                        text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                        font-bold text-(--color-primary)
                        leading-tight
                    ">
                        ImobChat a melhor solução para a captação de leads da sua imobiliária
                    </h1>

                    <p className="
                        text-(--color-primary)
                        text-base sm:text-lg
                        max-w-xl mx-auto md:mx-0
                    ">
                        Automatize o atendimento, aumente suas conversões e nunca mais perca um lead.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <Link
                            to='planos'

                            className="
                                inline-block px-8 py-3
                                border-2 border-(--color-primary)
                                text-(--color-dark)
                                rounded-full font-medium
                                hover:bg-(--color-secondary) hover:text-white
                                transition
                            "
                        >
                            Mais informações
                        </Link>
                    </div>
                </div>

                {/* MOCK DO CHAT */}
                <div className="flex justify-center md:justify-center">
                    <MockChat/>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
