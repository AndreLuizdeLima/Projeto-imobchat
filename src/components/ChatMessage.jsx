import React from 'react';
import { motion } from "motion/react";
import TypingIndicator from "./TypingIndicator";

const ChatMessage = ({ msg, onActionClick }) => {
  const isUser = msg.type === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
                px-4 py-2 rounded-2xl max-w-[80%]
                ${isUser
          ? 'self-end bg-imob-primary text-white rounded-tr-none'
          : 'self-start bg-gray-100 rounded-tl-none'}
              `}
    >
      {msg.typing ? (
        <TypingIndicator />
      ) : (
        <div className="flex flex-col gap-2">
          {msg.text && <span>{msg.text}</span>}

          {msg.image && (
            <img
              src={msg.image}
              alt="Imóvel sugerido"
              className="rounded-lg w-full h-auto shadow-sm"
            />
          )}

          {msg.actions && (
            <div className="flex flex-wrap gap-2 mt-2">
              {msg.actions.map((action) => (
                <button
                  key={action}
                  onClick={() => onActionClick?.(action)}
                  className={`
                                        px-3 py-1 text-xs rounded-full
                                        transition duration-300
                                        ${msg.simulatedClick === action
                      ? 'bg-imob-secondary scale-95 ring-2 ring-white/50'
                      : 'bg-imob-primary hover:opacity-90'} 
                                        text-white
                                    `}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
