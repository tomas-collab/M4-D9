import React from "react";
import {Formik, Form} from 'formik'
import {TextField} from './TextField.js'
import * as Yup from 'yup'

export const Signup = ()=>{
    const validate = Yup.object({
        firstName:Yup.string().min(2,'must be at least 2 character').required(),
        lastName:Yup.string().min(2,'must be at least 2 character').required(),
        email:Yup.string().email('not valid email').required(),
        password:Yup.string().min(6,'must be 15 character').required(),
        password:Yup.string().oneOf([Yup.ref('password'),null], 'password must match').required()
    })
    return(
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        >

        {formik =>(
            <div>
              <h1 className='my-4 font-weight-bold-display-4'>sign up</h1>
              {console.log(formik)}
              <Form>
                  <TextField label="First name" name="firstName" type="text"/>
                  <TextField label="last name" name="lastName" type="text"/>
                  <TextField label="email" name="email" type="email"/>
                  <TextField label="password" name="password" type="password"/>
                  <TextField label="confirm password" name="confirm password" type="password"/>
                   <button className="btn btn-dark mt-3" type="submit">Register</button>
                   <button className="btn btn-danger mt-3" type="reset">Reset</button>
              </Form>
            </div>
        )}
        </Formik>
    )
}