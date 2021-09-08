import React from 'react';
import './Dashboard.css';
// import DashboardNavbar from '../../components/Dashboard-Navbar/DashboardNavbar';
import AddNews from '../../components/AddNews/AddNews';

const Dashboard = () => {
    return (
        <div>
            {/* <DashboardNavbar></DashboardNavbar> */}
            <AddNews></AddNews>
        </div>
    );
};

export default Dashboard;