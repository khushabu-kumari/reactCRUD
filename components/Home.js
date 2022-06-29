import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import dummy_data from './dummydata'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
  let history = useNavigate()
  
  
  function setID(id,name,age,email,mobile){
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Email', email);
    localStorage.setItem('Mobile', mobile);
  }
  
  // Deleted function - functionality for deleting the entry
  function deleted(id){
      
    var index = dummy_data.map(function(emp) { return emp.id; }).indexOf(id);
  
    // deleting the entry with index
    dummy_data.splice(index,1)
  
    // We need to re-render the page for getting the results so redirect to same page.
    history('/')
  }
  
  return (
    <div  style={{margin:'10rem'}}>
        <Table striped bordered hover size="sm" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Mobile</th>
      <th colspan="2">Action</th>
    </tr>
  </thead>
  <tbody>
  
    {/* Mapping though every element in the array and showing the data in the form of table */}
    {dummy_data.map((item) => {
        return(
           <tr>
               <td>{item.Name}</td>
               <td>{item.Age}</td>
               <td>{item.Email}</td>
               <td>{item.Mobile}</td>
        
               {/* getting theid,name, and age for storing these value in the jsx with onclick event */}
               <td><Link to={`/edit`}><Button onClick={(emp) =>
                    setID(item.id,item.Name,item.Age,item.Email,item.Mobile)} variant="info">
                    Update</Button></Link>
               </td>
  
               {/* Using thr deleted function passing the id of an entry */}
              <td><Button onClick={emp => deleted(item.id)} 
                    variant="danger">Delete</Button>
              </td>
          </tr>
        )
    }
  )
}
</tbody>
</Table>
  
{/* Button for redirecting to create page for insertion of values */}
<Link className="d-grid gap-2" to='/create'>
  <div class="text-left">
      <div style={{top: 5,display:'flex', justifyContent: 'flex-start',float: 'left'}}>
         <Button variant="warning" size="lg">Create</Button>
      </div>
  </div>
</Link>
    </div>
  )
}
  
export default Home