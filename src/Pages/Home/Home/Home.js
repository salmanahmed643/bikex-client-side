import React from 'react';
import Banner from '../Banner/Banner';
import FollowSteps from '../FollowSteps/FollowSteps';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <> 
            <Banner></Banner>
            <FollowSteps></FollowSteps>
            <Products></Products>
            <Reviews></Reviews>
        </>
    );
};

export default Home;