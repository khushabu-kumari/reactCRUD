import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import dummy_data from './dummydata';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

    //Making useState for setting and fetching a value in jsx
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    //Function for creating a post/entry
    const handleSubmit = (emp) =>{
        emp.preventDefault(); //Prvent reload

        const ids = uuid()  //Creating unique id
        let uni = ids.slice(0,8) //Slicing unique id

        //Fetching a value from useState and then pushing to javascript object dummy_data
        let a = name, b=age, e=email, m=mobile
        dummy_data.push({id:uni,Name:a,Age:b,Email:e,Mobile:m})

        //Redirecting to home page after creater done
        history('/')

    }
    return (
       <div>
           <Form className="d-grid gap-2" style={{margin:'15rem'}}>

               {/*Fetching a value from input textfield in a setname using usestate*/}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={emp => setname(emp.target.value)} 
                        type="text"
                        placeholder="Enter Name" required/>
                </Form.Group>

               {/*Fetching a value from input textfield in a setage using usestate*/}
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Control onChange={emp => setage(emp.target.value)}
                        type="text"
                        placeholder="Age" required/>
                </Form.Group>
               
               {/*Fetching a value from input textfield in a setemail using usestate*/}
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={emp => setemail(emp.target.value)}
                        type="text"
                        placeholder="Email" required/>
                </Form.Group>

                {/*Fetching a value from input textfield in a setmobile using usestate*/}
                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Control onChange={emp => setmobile(emp.target.value)}
                        type="text"
                        placeholder="Mobile" required/>
                </Form.Group>

                {/*handing a onclick event in button for firing a function */}
                <Button
                onClick={emp => handleSubmit(emp)}
                   variant="primary" type="submit">
                   Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className='d-grid gap-2' to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>

           </Form>
       </div> 
    )


}

export default Create