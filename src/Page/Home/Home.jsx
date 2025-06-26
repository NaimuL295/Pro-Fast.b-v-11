import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ServiceCard from './Services/ServiceCard/ServiceCard';
import ClientMarquee from './CleintMarquee/ClientMarquee';

import Benefits from './Benefits';
import BeMerchant from './BeMerchant/BeMerchant';
import Customer from './Customer/Customer';
import Frequently from './Frequently/Frequently';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServiceCard></ServiceCard>
            <ClientMarquee></ClientMarquee>
            <Benefits></Benefits>
            <BeMerchant></BeMerchant>
            <Customer></Customer>
            <Frequently></Frequently>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;