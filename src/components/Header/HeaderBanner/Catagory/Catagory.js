import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
    
   const allCategory = [
       {name: 'All',link: '/all'},
       {name: 'Food', link: '/all'},
       {name: 'Life', link: '/life'},
       {name: 'Racing', link: '/racing'},
       {name: 'Technology', link: '/technology'},
       {name: 'Travel', link: '/travel'},
       {name: 'World', link: '/world'}
   ]
    return (
        <div >
            {
                allCategory.map((data, index) => <ul data={data} key={index}>
                    <li className='my-3 text-capitalize border'>
                        <Link to={`${data.link}`} className='textSecondary'>
                            {data.name}
                        </Link>
                    </li>
                </ul>)
            }
        </div>
    );
};

export default Category;