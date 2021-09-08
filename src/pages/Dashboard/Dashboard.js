import React from 'react';
import './Dashboard.css';
import { Row , Col} from 'react-bootstrap';
import DashboardSidebar from '../../components/Dashboard_sidebar/DashboardSidebar';
import DashboardRightSIde from '../../components/Dashboard/Dashboard_RightSIde';
import DashboardNavbar from '../../components/Dashboard-Navbar/DashboardNavbar';

const Dashboard = () => {
    return (
        <div>
            {/* <DashboardNavbar></DashboardNavbar> */}
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