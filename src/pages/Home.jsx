import React from 'react';
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Feature from "../components/Feature.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import ScheduleDemoSection from "../components/ScheduleDemoSection.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Feature />
            <HowItWorks />
            <ScheduleDemoSection id="contato"/>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Home;