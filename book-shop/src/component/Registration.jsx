import { useState } from "react"

const registration=()=>{

    const [registration, setRegistration] = useState({name:'',surname:'',email:'',password:'',confirmPassword:''})
    const [shopComplete, setShopComplete] = useState(false)
    return(
         <>
         <Form>

                <Form.Group className="mb-3">
                     <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={registration.name}/>
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" value={registration.surname}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={registration.email}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={registration.password}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={registration.confirmPassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>  
         </>
    )
}