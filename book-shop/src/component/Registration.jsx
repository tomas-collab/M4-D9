import { useState } from "react"
import {Form,Button} from 'react-bootstrap'
const Registration=()=>{

    const [registration, setRegistration] = useState({name:'',surname:'',email:'',password:'',confirmPassword:''})
    const [shopComplete, setShopComplete] = useState(false)

 const handleInput = (key,value)=>{
          setRegistration(
             { ...registration,
            [key]:value}
            )
 }
    return(
         <>
         <Form>

                <Form.Group className="mb-3">
                     <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>handleInput("name",e.target.value)} value={registration.name}/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" onChange={(e)=>handleInput('surname',e.target.value)}  value={registration.surname}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleInput('email',e.target.value)}  value={registration.email}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('password',e.target.value)}  value={registration.password}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('confirmPassword',e.target.value)}   value={registration.confirmPassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>  
         </>
    )
}

export default Registration