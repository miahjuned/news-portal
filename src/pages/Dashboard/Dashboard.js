import React from 'react';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { Row , Col} from 'react-bootstrap';
import DashboardSidebar from '../../components/Dashboard_sidebar/DashboardSidebar';
import DashboardRightSIde from '../../components/Dashboard/Dashboard_RightSIde';
import Home from '../Home/Home';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Row>
                <Col md={3}>
                    <div className="bg-info">
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="bg-warning">
                        <DashboardRightSIde></DashboardRightSIde>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;