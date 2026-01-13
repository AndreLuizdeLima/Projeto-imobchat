import React from 'react';
import Header from "../components/Header.jsx";
import ScheduleDemoSection from "../components/ScheduleDemoSection.jsx";

const Contato = () => {
    return (
        <div>
            <Header />
            <div className='bg-white h-screen pt-20'>
                <ScheduleDemoSection />
            </div>

        </div>
    );
};

export default Contato;