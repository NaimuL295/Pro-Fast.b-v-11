import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;