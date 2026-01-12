import { motion } from "motion/react";

const dotVariants = {
    animate: {
        scale: [0.7, 1.1, 0.7],
        opacity: [0.4, 1, 0.4],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const TypingIndicator = () => {
    return (
        <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    variants={dotVariants}
                    animate="animate"
                    transition={{ delay: i * 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                />
            ))}
        </div>
    );
};

export default TypingIndicator;
