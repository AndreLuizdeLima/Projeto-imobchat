import React from "react";

const WhatsAppButton = () => {
    return (
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed
                bottom-6
                right-6
                z-50
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
                shadow-lg
                hover:bg-green-600
                transition
                animate-bounce
                hover:animate-none
            "
        >
            <i className="fab fa-whatsapp text-4xl"></i>
        </a>
    );
};

export default WhatsAppButton;
