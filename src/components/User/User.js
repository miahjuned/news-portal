import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';
const User = () => {
      
    const [admin, setAdmin] = useState([]);
    console.log('data', admin)

    useEffect(() => {
        fetch('http://localhost:5000/alladmin')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])

    return (
        <section>
            <DashboardNavbar></DashboardNavbar>
            <div className='allUser'>
                <Container className='allUser-table shadowHard'>
                    <Table responsive striped bordered hover size="sm" className="text-center text-capitalize allUser" >
                        <thead>
                            <tr>
                            <th className="textPrimary">Date</th>
                            <th className="textPrimary">Name</th>
                            <th className="textPrimary">Email</th>
                            <th className="textPrimary">Designation</th>
                            </tr>
                        </thead>
                        <tbody>                                    
                                {
                                    admin.map((allAdmin, index) =>(<tr allAdmin={allAdmin} key={index}>
                                        <td>{allAdmin.date}</td>
                                        <td>{allAdmin.newAdminName}</td>
                                        <td>{allAdmin.newAdminEmail}</td>
                                        <td>{allAdmin.designation}</td>
                                    </tr>))
                                }
                        </tbody>
                    </Table>
                </Container>
            </div>
        </section>
    );
};

export default User;