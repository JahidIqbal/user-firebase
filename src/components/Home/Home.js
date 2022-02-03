import React from 'react';
import Footer from '../Footer/Footer';
import GoalList from '../GoalList/GoalList';

import Navbar from '../Navbar/Navbar';




const Home = () => {
    return (
        <div>
            <Navbar />
            <GoalList />
            <Footer />
        </div>
    );
};

export default Home;