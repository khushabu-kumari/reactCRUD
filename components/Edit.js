import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummy_data from './dummydata';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	// Here usestate has been used in order to set and get values from the jsx
	const [name, setname] = useState('');
	const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
	const[id,setid] = useState('');

	// used for navigation with logic in javascript
	let history = useNavigate()
	
	// getting an index of an entry with an id
	var index = dummy_data.map(function(emp) { return emp.id; }).indexOf(id);

	// function for handling the edit and pushing changes of editing/updating
	const handelSubmit = (emp) =>{
		emp.preventDefault(); // preventing from reload
		
		let a = dummy_data[index] // getting an index of an dummy_data

		// putting the value from the input textfield and replacing it from existing for updation
		a.Name = name
		a.Age = age
        a.Email = email
        a.Mobile = mobile

		// redirecting to main page
		history('/')
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setage(localStorage.getItem('Age'))
        setemail(localStorage.getItem('Email'))
        setmobile(localStorage.getItem('Mobile'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

			{/* setting a name from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={name}
							onChange={emp => setname(emp.target.value)}
							type="text" placeholder="Enter Name" />
			</Form.Group>

			{/* setting an age from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={age}
							onChange={emp => setage(emp.target.value)}
							type="text" placeholder="Age" />
			</Form.Group>

            {/* setting an email from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={email}
							onChange={emp => setemail(emp.target.value)}
							type="text" placeholder="Email" />
			</Form.Group>

            {/* setting a mobile from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={mobile}
							onChange={emp => setmobile(emp.target.value)}
							type="text" placeholder="Mobile" />
			</Form.Group>

			{/* Handling an onclick event running an edit logic */}
			<Button
			onClick={emp => handelSubmit(emp)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			{/* Redirecting to main page after editing */}
			<Link className="d-grid gap-2" to='/'>
			<Button variant="warning" size="lg">Home</Button>
			</Link>
		</Form>
	</div>
)
}

export default Edit
