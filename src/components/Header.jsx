import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="h-[10vh] w-full bg-(--color-white) px-6 md:px-[80px] shadow-[0_1px_8px_rgba(0,0,0,0.08)] relative z-20">
                <nav className="flex items-center justify-between h-full">

                    {/* Logo */}
                    <img
                        src="/logo-horizontal.png"
                        alt="Logo da aplicação"
                        className="h-8 md:h-10 object-contain"
                    />

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex gap-6 text-(--color-dark)">
                        <li className="cursor-pointer hover:text-(--color-light) transition">
                            Contato
                        </li>
                        <li className="cursor-pointer hover:text-(--color-light) transition">
                            Quem somos
                        </li>

                    </ul>

                    {/* Botão Mobile */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <i className="fa-solid fa-bars text-(--color-primary)"></i>
                    </button>
                </nav>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Offcanvas */}
            <aside
                className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-40 transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-6 shadow-[0_1px_8px_rgba(0,0,0,0.08)] relative z-20">
                    <img
                        src="/logo-horizontal.png"
                        alt="Logo da aplicação"
                        className="h-8 md:h-10 object-contain"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-2xl"
                        aria-label="Fechar menu"
                    >
                        <i className="fa-solid fa-xmark text-(--color-primary)"></i>
                    </button>
                </div>

                <ul className="flex flex-col gap-6 p-6 text-(--color-dark)">
                    <li
                        className="cursor-pointer hover:text-(--color-light)"
                        onClick={() => setIsOpen(false)}
                    >
                        Contato
                    </li>
                    <li
                        className="cursor-pointer hover:text-(--color-light)"
                        onClick={() => setIsOpen(false)}
                    >
                        Quem somos
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Header;
