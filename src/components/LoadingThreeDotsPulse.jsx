"use client";

import { motion } from "motion/react";

const DOTS_COUNT = 20;

function LoadingThreeDotsPulse() {

    const dotVariants = {
        pulse: (index) => ({
            scale: [0.8, 1.4, 0.8],
            opacity: [0.6, 1, 0.6],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
            },
        }),
    };

    return (
        <motion.div className="dots-container">
            {Array.from({ length: DOTS_COUNT }).map((_, index) => (
                <motion.div
                    key={index}
                    className="dot"
                    custom={index}
                    variants={dotVariants}
                    animate="pulse"
                />
            ))}
            <StyleSheet />
        </motion.div>
    );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
        .dots-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--color-light);
          will-change: transform, opacity;
        }
      `}
        </style>
    );
}

export default LoadingThreeDotsPulse;
