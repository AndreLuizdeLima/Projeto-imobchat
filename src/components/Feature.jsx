import { motion } from "motion/react";
import FeatureCard from "./FeatureCard";

const Features = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cards = [
        {
            icon: 'fa-solid fa-hexagon-nodes',
            title: 'Atendimento rápido e facilitado',
            description: 'A IA responde seus leads em segundos, sem filas ou espera.'
        },
        {
            icon: 'fa-regular fa-clock',
            title: 'Disponível 24 horas por dia',
            description: 'Seus leads são atendidos a qualquer hora, todos os dias.'
        },
        {
            icon: 'fa-solid fa-circle-nodes',
            title: 'Integração completa',
            description: 'Conecte com CRMs, sistemas imobiliários e portais de terceiros.'
        },
        {
            icon: 'fa-solid fa-brain',
            title: 'IA conversacional inteligente',
            description: 'Sugere imóveis, filtra interesses e gera leads muito mais qualificados.'
        },
    ];

    return (
        <section className="py-24 bg-(--color-white) md:px-[80px]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-(--color-primary)">
                        Capte mais leads qualificados com inteligência artificial
                    </h2>

                    <p className="text-lg text-(--color-dark)">
                        Nossa IA atende seus leads instantaneamente, entende o perfil de cada cliente
                        e entrega oportunidades prontas para o time de corretores.
                    </p>

                    <ul className="space-y-2 text-(--color-dark)">
                        <li><i className="fa-solid fa-check mr-1"></i> Atendimento imediato</li>
                        <li><i className="fa-solid fa-check mr-1"></i> Filtragem inteligente</li>
                        <li><i className="fa-solid fa-check mr-1"></i> Mais conversão, menos esforço</li>
                    </ul>
                </div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {cards.map((card, index) => (
                        <FeatureCard
                            key={index}
                            {...card}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
