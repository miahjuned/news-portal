import React, { useContext, useState } from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
// import DashboardNavbar from '../../components/Dashboard-Navbar/DashboardNavbar';
import { googleSignIn, initializeSignIn } from './firebaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons'

const DashboardRightSIde = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [lognUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    initializeSignIn();
   
   
    // Loging usign Google
    const [googleUser, setGoogleUser] = useState({});
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(res => {
                console.log(res)
                // setGoogleUser(res);
                // setLogInUser(res);
                // history.replace(from);
            })
    };
 


    const onSubmit = newNews => {
        console.log('onsubmit data', onSubmit)
        const newsData = {
            date: newNews.date,
            ReporterName: newNews.ReporterName,
            ReporterDesignation: newNews.ReporterDesignation,
            newAdminName: newNews.NewAdminname,
            newAdminEmail: newNews.NewAdminEmail,
            designation: newNews.designation,
            date: new Date()
        }

        const url = `http://localhost:5000/newadmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
        // .then(res => alert('server side responded', res))
        .then(res => res.json())
        .then(success => {
            alert('server side responded', success)
            // if(success){
            //     alert('server side responded')
            // }
        })
    };




    return (
        <>
            {/* <DashboardNavbar></DashboardNavbar> */}
            <div className='formContainer'> 
                <Container>
                    <Form className="newsForm shadowSoft" onSubmit={handleSubmit(onSubmit)}>
                            <strong className='textPrimary'>Login</strong>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel  className="textSecondary">Email:</FormLabel>
                                <FormControl placeholder="news title" {...register('NewAdminname', { required: true })}/>
                                {errors.newsTitle && <span className="error">News Title is required</span>}
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel  className="textSecondary">password:</FormLabel>
                                <FormControl as="textarea" cols={30} rows={10} placeholder="news description" {...register('NewAdminEmail', { required: true })}/>
                                {errors.newsDescription && <span className="error">News Description is required</span>}
                            </FormGroup>

                        <Button className="btnPrimary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    
                <p>or</p>
                    <Button className="btnPrimary" onClick={handleGoogleSignIn} block><FontAwesomeIcon icon={faGoogle} /> continue with Google</Button>
                </Container>
            </div>
        </>
    );
};

export default DashboardRightSIde;