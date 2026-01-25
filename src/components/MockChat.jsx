import React, { useEffect, useState, useRef } from 'react';
import { motion } from "motion/react";
import { INITIAL_MESSAGES, CHAT_SEQUENCE } from "../data/chatData";
import ChatMessage from "./ChatMessage";

const MockChat = () => {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    };

    /**
     * Adiciona mensagem do usuário e inicia digitação da IA
     */
    const handleAction = (text) => {
        setMessages(prev => {
            const id = Date.now();
            return [
                ...prev,
                { id, type: 'user', text, visible: true }
            ];
        });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const timeouts = [];

        CHAT_SEQUENCE.forEach(step => {
            // Timeout principal para cada step (IA ou Usuário)
            const timeout = setTimeout(() => {
                setMessages(prev => {
                    if (step.nextText) {
                        const exists = prev.some(msg => msg.id === step.id);
                        if (exists) {
                            return prev.map(msg =>
                                msg.id === step.id
                                    ? {
                                        ...msg,
                                        type: 'ai',
                                        text: step.nextText,
                                        image: step.image,
                                        actions: step.actions,
                                        simulatedClick: step.simulatedClick,
                                        typing: false,
                                        visible: true
                                    }
                                    : msg
                            );
                        }
                        return [
                            ...prev,
                            {
                                id: step.id,
                                type: 'ai',
                                text: step.nextText,
                                image: step.image,
                                actions: step.actions,
                                simulatedClick: step.simulatedClick,
                                typing: false,
                                visible: true
                            }
                        ];
                    }

                    if (step.type === 'user') {
                        if (prev.some(msg => msg.id === step.id)) return prev;
                        return [
                            ...prev,
                            { id: step.id, type: 'user', text: step.text, visible: true },
                            { id: step.id + 1, type: 'ai', text: '', typing: true, visible: true }
                        ];
                    }

                    return prev;
                });

                // Se houver clique simulado, agenda ele logo após a mensagem aparecer
                if (step.simulatedClick) {
                    const clickTimeout = setTimeout(() => {
                        handleAction(step.simulatedClick);
                    }, 1000); // 1s depois da mensagem da IA aparecer
                    timeouts.push(clickTimeout);
                }

            }, step.delay);

            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
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
            <div className="bg-imob-dark text-white px-4 py-3 flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base">
                    ImobChat - Assistente Virtual
                </span>
                <span className="text-xl cursor-pointer">×</span>
            </div>

            {/* Corpo */}
            <div
                ref={chatContainerRef}
                className="
          p-4 flex flex-col gap-4
          text-xs sm:text-sm text-gray-800
          h-[calc(100%-110px)]
          overflow-y-auto scrollbar-hide
        "
            >
                {messages.map(msg => (
                    msg.visible && (
                        <ChatMessage
                            key={msg.id}
                            msg={msg}
                            onActionClick={handleAction}
                        />
                    )
                ))}
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
                <button
                    className="
            w-9 h-9 sm:w-10 sm:h-10
            rounded-full bg-imob-primary
            text-white flex items-center justify-center
          "
                >
                    ➤
                </button>
            </div>
        </motion.div>
    );
};

export default MockChat;
