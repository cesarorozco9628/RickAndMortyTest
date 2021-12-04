import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import Navigation from './Navigation';
import { Users, loginAccess, User} from '../Redux/Actions'

const Register = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const Data = useSelector(state => state.User)

    const regist = (data) => {
        dispatch(loginAccess(true));
        dispatch(User(data));
        history.push('/');
    }
     const HandleLogin = (data) => {
        const {user, password} = data;
        Data.map((element) => {
            if(element.usuario === user && element.password === password){
                 dispatch(loginAccess(true));
                 history.push('/');
            }
        })
    }
    useEffect(() => {
        dispatch(Users());
    },[])
    return (
        <>
            <Navigation/>
            <section className='container'>
                <form onSubmit={handleSubmit(HandleLogin)}>
                    <div className="mb-3">
                        <label className="form-label" >User</label>
                        <input type="text" className="form-control"name='user' ref={register} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"  name='password' ref={register} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Register;