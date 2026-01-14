import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-(--color-primary) text-white">

            {/* Conteúdo principal */}
            <div className="mx-auto py-12 px-6 md:px-20">
                <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-4">

                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                        <img
                            src="/logo-vertical-white-2.png"
                            alt="Logo ImobChat"
                            className="h-30 object-contain"
                        />
                        <span className="text-sm max-w-xs pt-3">
                            Solução inteligente para captação e qualificação de leads imobiliários.
                        </span>
                    </div>

                    {/* Links rápidos */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-xl md:text-[2rem] font-semibold">
                            Links Rápidos
                        </h3>
                        <Link to='/'  className="hover:text-(--color-light)">Home</Link>
                        <Link to='/contato'  className="hover:text-(--color-light)">Contato</Link>
                        <Link to='/planos'  className="hover:text-(--color-light)">Mais Informações</Link>
                        <Link  to='/politica-de-privacidade' className="hover:text-(--color-light)">Política de privacidade</Link>
                    </div>

                    {/* Contato */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-xl md:text-[2rem] font-semibold">
                            Contato
                        </h3>

                        <span>
                            <i className="fa-regular fa-envelope mr-2"></i>
                            contato@imobchat.com.br
                        </span>

                        <span>
                            <i className="fa-brands fa-whatsapp mr-2"></i>
                            (46) 99913-1085
                        </span>

                        <span>
                            <i className="fab fa-instagram mr-2"></i>
                            @imobchat
                        </span>

                        <span>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            Pato Branco – PR
                        </span>

                        <a
                            href="#"
                            className="w-full md:w-auto mt-3 bg-white px-6 py-3
                                text-(--color-primary) rounded-lg font-bold
                                hover:bg-[#f6e9ff] transition text-center"
                        >
                            <i className="fa-brands fa-whatsapp mr-2"></i>
                            Enviar uma mensagem
                        </a>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20">
                <div className="mx-auto px-6 py-4 text-center text-sm text-white/80">
                    &copy; {new Date().getFullYear()} ImobChat. Todos os direitos reservados.
                </div>
            </div>

        </footer>
    );
};

export default Footer;
