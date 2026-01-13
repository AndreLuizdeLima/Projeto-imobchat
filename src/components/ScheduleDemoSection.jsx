export default function ScheduleDemoSection() {

    const handleSubmit = (e) => {
        e.preventDefault()

        e.preventDefault()

        const formData = new FormData(e.target)

        const nome = formData.get("nome")
        const email = formData.get("email")
        const telefone = formData.get("telefone")
        const imobiliaria = formData.get("imobiliaria")

        const message =
            `Olá, gostaria de falar com um especialista.
            Nome: ${nome}
            E-mail: ${email}
            Telefone: ${telefone}
            Imobiliária: ${imobiliaria}`

        const url = `https://api.whatsapp.com/send?phone=5546999131085&text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
    }


    return (<section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Copy curta e direta */}
            <div>
                <h2 className="text-4xl font-bold text-(--color-primary)">
                    Fale com nosso time de especialistas
                </h2>

                <p className="mt-3 text-lg text-(--color-dark) ">
                    Agende uma conversa rápida e veja como nossa solução pode
                    impulsionar os resultados da sua imobiliária.
                </p>
            </div>

            {/* Formulário enxuto */}
            <div className="bg-white rounded-2xl shadow-md p-8">
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Seu nome"
                        name="nome"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--color-secondary)"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--color-secondary)"
                    />

                    <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone / WhatsApp"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--color-secondary)"
                    />

                    <input
                        type="text"
                        name="imobiliaria"
                        placeholder="Nome da imobiliária"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--color-secondary)"
                    />

                    <button
                        type="submit"
                        className="w-full bg-(--color-primary) hover:bg-(--color-secondary) text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                        Falar com um especialista
                    </button>
                </form>

                <p className="mt-3 text-xs text-gray-500 text-center">
                    Nosso time entrará em contato para entender sua necessidade.
                </p>
            </div>

        </div>
    </section>)
}
