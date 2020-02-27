import React from 'react';
import { withFormik, Field, Form } from "formik";
import * as Yup from 'yup';
import './Form.css'


function Forms ({values, errors, touched}){
    return (
        <div>
            <Form> 
                <label htmlFor='name'>Name:
                    <Field type='text' name='name' id='name' placeholder='name'/>
                </label>
                {touched.name && errors.name && (<p>{errors.name}</p>)}
                <label htmlFor='email' >email:
                    <Field type='text' name='email' id='email' placeholder='email@email.com'/>
                </label>
                {touched.email && errors.email && (<p>{errors.email}</p>)}
                <label htmlFor='password'>password:
                    <Field type='password' name='password' id='password' placeholder='password'/>
                </label>
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <label htmlFor='terms'>
                    <Field type='checkbox' checked={values.terms} name='terms' id='terms' />
                    Terms of Service
                </label>
                {touched.terms && errors.terms && (<p>{errors.terms}</p>)}
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

const SuperForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
      return {
        name: name || '',
        email: email || '',
        password: password || '',
        terms: terms || false
      }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required()
    })
})(Forms);

export default SuperForm; 