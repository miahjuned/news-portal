import React from 'react';
import './Dashboard.css';
import DashboardNavbar from '../../components/Dashboard-Navbar/DashboardNavbar';

const Dashboard = () => {
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <h2 className='textPrimary my-5 py-5 px-5 mx-5'>Welcome to dashboard</h2>
        </div>
    );
};

export default Dashboard;