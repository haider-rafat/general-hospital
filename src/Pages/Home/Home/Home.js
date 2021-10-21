import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Ductors from '../Ductors/Ductors';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Ductors></Ductors>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;