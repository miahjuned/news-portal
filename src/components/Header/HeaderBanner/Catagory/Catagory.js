import React from 'react';
import { Col } from 'react-bootstrap';

const Catagory = (props) => {
    
    const data = props.data;
    console.log('data', data)
    const {name, desc, img , designation} = data;
    return (
        <div>
             <td className='pb-2 textSecondary'>
                <tr >{name}</tr>
            </td>
        </div>
    );
};

export default Catagory;


   
// const [admin, setAdmin] = useState([]);
// console.log('data', admin)

// useEffect(() => {
//     fetch('http://localhost:5000/alladmin')
//     .then(res => res.json())
//     .then(data => setAdmin(data))
// }, [])
// // const data = props.data;
// // console.log('data', data)
// // const {name, desc, img , designation} = data;
// return (
//     <tbody striped bordered hover size="sm">                                    
//         {
//             admin.map((allAdmin, index) =>(<tr allAdmin={allAdmin} key={index}>
//                 <td className='pb-3'>{allAdmin.newAdminName}</td>
//             </tr>))
//         }
//     </tbody>
// );