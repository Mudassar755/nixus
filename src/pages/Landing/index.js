import React from 'react'
import HeroSection from '../../components/HeroSection';
import TreasureHunter from '../../components/TreasureHunter';
import NewLife from '../../components/NewLife';
import GitRight from '../../components/GitRight';
import Reading from '../../components/Reading';
import CatchYa from '../../components/CatchYa';
import NoMoreTyping from '../../components/NoMoreTyping';
import KnowText from '../../components/KnowText';
import HowItWorks from '../../components/HowItWorks';
import News from '../../components/News';
const LandingPage = () => {

    return (
        <>
            <HeroSection />
            <TreasureHunter />
            <NewLife/>
            <GitRight/>
            <Reading/>
            <CatchYa/>
            <NoMoreTyping/>
            <KnowText/>
            <HowItWorks/>
            <News />

        </>
    )
}

export default LandingPage;