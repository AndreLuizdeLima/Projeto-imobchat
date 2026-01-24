import React, { useState } from 'react';
import { motion } from "motion/react";

export default function ScheduleDemoSection() {
    const [emailError, setEmailError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const nome = formData.get("nome")
        const email = formData.get("email")
        const telefone = formData.get("telefone")
        const imobiliaria = formData.get("imobiliaria")

        if (!validateEmail(email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            return;
        } else {
            setEmailError('');
        }

        const message =
            `Olá, gostaria de falar com um especialista.
            Nome: ${nome}
            E-mail: ${email}
            Telefone: ${telefone}
            Imobiliária: ${imobiliaria}`

        const url = `https://api.whatsapp.com/send?phone=5546999131085&text=${encodeURIComponent(message)}`

        setIsSubmitted(true);
        setTimeout(() => {
            window.open(url, "_blank")
        }, 1200);
    }


    return (<section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Copy curta e direta */}
            <div>
                <h2 className="text-4xl font-bold text-imob-primary">
                    Fale com nosso time de especialistas
                </h2>

                <p className="mt-3 text-lg text-imob-dark ">
                    Agende uma conversa rápida e veja como nossa solução pode
                    impulsionar os resultados da sua imobiliária.
                </p>
            </div>

            {/* Formulário enxuto */}
            <div className="bg-white rounded-2xl shadow-md p-8 min-h-[400px] flex flex-col justify-center">
                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-4"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-check text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-imob-primary">Obrigado!</h3>
                        <p className="text-gray-600">
                            Sua solicitação foi enviada. Redirecionando para o WhatsApp...
                        </p>
                    </motion.div>
                ) : (
                    <>
                        <form className="space-y-4" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Seu nome"
                                name="nome"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-imob-secondary"
                            />

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    required
                                    onChange={() => setEmailError('')}
                                    className={`w-full rounded-lg border ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-300'} px-4 py-3 focus:outline-none focus:ring-2 focus:ring-imob-secondary transition-colors`}
                                />
                                {emailError && (
                                    <p className="text-red-500 text-xs mt-1 absolute left-1">{emailError}</p>
                                )}
                            </div>

                            <div className="pt-2">
                                <input
                                    type="tel"
                                    name="telefone"
                                    placeholder="Telefone / WhatsApp"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-imob-secondary"
                                />
                            </div>

                            <input
                                type="text"
                                name="imobiliaria"
                                placeholder="Nome da imobiliária"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-imob-secondary"
                            />

                            <button
                                type="submit"
                                className="w-full bg-imob-primary hover:bg-imob-secondary text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
                            >
                                Falar com um especialista
                            </button>
                        </form>

                        <p className="mt-3 text-xs text-gray-500 text-center">
                            Nosso time entrará em contato para entender sua necessidade.
                        </p>
                    </>
                )}
            </div>

        </div>
    </section>)
}
