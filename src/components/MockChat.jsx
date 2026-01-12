import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import TypingIndicator from "./TypingIndicator";

const MockChat = () => {
    const [showResponse, setShowResponse] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResponse(true);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
                w-[280px] sm:w-[320px]
                h-[460px] sm:h-[520px]
                bg-white rounded-2xl
                shadow-xl border
                relative overflow-hidden
            "
        >
            {/* Header */}
            <div className="bg-(--color-dark) text-white px-4 py-3 flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base">
                    ImobChat - Assistente Virtual
                </span>
                <span className="text-xl cursor-pointer">×</span>
            </div>

            {/* Corpo */}
            <div className="p-4 flex flex-col gap-4 text-xs sm:text-sm text-gray-800">

                {/* Mensagem do usuário */}
                <div className="self-end bg-(--color-primary) text-white px-4 py-2 rounded-full max-w-[70%]">
                    Oi
                </div>

                {/* Bubble da IA */}
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="self-start bg-gray-100 px-4 py-3 rounded-2xl max-w-[80%]"
                >
                    {!showResponse ? (
                        <TypingIndicator />
                    ) : (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Olá! 👋 Seja bem-vindo ao ImobChat! Como posso te ajudar hoje?
                        </motion.span>
                    )}
                </motion.div>

            </div>

            {/* Input fake */}
            <div className="absolute bottom-0 w-full p-3 bg-white border-t flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    disabled
                    className="
                        flex-1 px-4 py-2
                        rounded-full border
                        text-xs sm:text-sm
                        bg-gray-100 cursor-not-allowed
                    "
                />
                <button className="
                    w-9 h-9 sm:w-10 sm:h-10
                    rounded-full bg-(--color-primary)
                    text-white flex items-center justify-center
                ">
                    ➤
                </button>
            </div>
        </motion.div>
    );
};

export default MockChat;
