import React, {useState, useEffect} from 'react';
import { withFormik, Field, Form } from "formik";
import axios from 'axios';
import AddedUser from './AddedUser';
import * as Yup from 'yup';
import './Form.css'


function Forms ({values, errors, touched, status}){
    const [users , setUsers ] = useState([]);
    useEffect(()=>{
        status && setUsers(users => [...users, status])
    },[status])
    return (
        <div>
            <Form className='container'> 
                <label htmlFor='name'>name:
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
            <AddedUser users={users}/> 
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
    }),
    handleSubmit(values, {setStatus, resetForm}){
        axios.post('https://reqres.in/api/users', values).then( res => {
            setStatus(res.data);
            resetForm();
        }).catch(err => console.log(err))
    }
})(Forms);

export default SuperForm; 