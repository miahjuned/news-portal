import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <Container>
           <div>
               <ul>
                   <li>
                        <Link to="/addnews">ADD News</Link>
                    </li>
                   <li>
                        <Link to="/addadmin">ADD Admin</Link>
                    </li>
               </ul>
           </div>
        </Container>
    );
};

export default DashboardSidebar;