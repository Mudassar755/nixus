import React from 'react'
import HeroSection from '../../components/HeroSection';
import TreasureHunter from '../../components/TreasureHunter';
import NewLife from '../../components/NewLife';
import GetItRight from '../../components/GetItRight';
import NoMoreReading from '../../components/NoMoreReading';
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
            <GetItRight/>
            <NoMoreReading/>
            <CatchYa/>
            <NoMoreTyping/>
            <KnowText/>
            <HowItWorks/>
            <News />

        </>
    )
}

export default LandingPage;