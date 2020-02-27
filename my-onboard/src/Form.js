import React from 'react';
import { withFormik, Field, Form } from "formik";


function Forms ({values}){
    return (
        <div>
            <Form> 
                <label htmlFor='name'>Name:
                    <Field type='text' name='name' id='name' placeholder='name'/>
                </label>
                <label htmlFor='email' >email:
                    <Field type='text' name='email' id='email' placeholder='email@email.com'/>
                </label>
                <label htmlFor='password'>password:
                    <Field type='text' name='password' id='password' placeholder='password'/>
                </label>
                <label htmlFor='terms'>
                    <Field type='checkbox' checked={values.terms} name='terms' id='terms' />
                    Terms of Service
                </label>
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
    }
})(Forms);

export default SuperForm; 