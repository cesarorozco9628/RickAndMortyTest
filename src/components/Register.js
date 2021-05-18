import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {loginAccess, User} from '../Redux/Actions'
import {useHistory} from 'react-router-dom'
import Navigation from './Navigation';


const Register = () => {

    
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const history = useHistory();


    const regist = (data) => {
        dispatch(loginAccess(true));
        dispatch(User(data));
        history.push('/');
    }
    return (
        <>
            <Navigation/>
            <section className='container'>
                <form onSubmit={handleSubmit(regist)}>
                    <div className="mb-3">
                        <label className="form-label" >User</label>
                        <input type="text" className="form-control"name='user' ref={register} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' ref={register} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" autoComplete='on' name='password' ref={register} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Register;