import { motion } from "motion/react";

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};


const FeatureCard = ({ icon, title, description }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="
                flex flex-col gap-3 p-6
                rounded-xl border border-gray-200
                bg-white shadow-sm
                hover:shadow-md transition
            "
        >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg text-(--color-white) bg-(--color-secondary)">
                <i className={`${icon} text-2xl`} />
            </div>

            <h4 className="text-lg font-semibold text-(--color-dark)">
                {title}
            </h4>

            <p className="text-sm text-(--color-dark)">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
