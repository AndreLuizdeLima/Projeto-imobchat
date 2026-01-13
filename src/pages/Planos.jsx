import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import PricingSection from "../components/PricingSection.jsx";

const Planos = () => {
    return (
        <div>
            <Header />
            <PricingSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Planos;