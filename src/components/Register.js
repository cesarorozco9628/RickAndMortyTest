import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {loginAccess, User} from '../Redux/Actions'
import {useHistory} from 'react-router-dom'
import Navigation from './Navigation';
import {Users} from '../Redux/Actions'

const Register = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const history = useHistory();


    const regist = (data) => {
        dispatch(loginAccess(true));
        dispatch(User(data));
        history.push('/');
    }
     // const HandleLogin = (data) => {
    //     const {user, password} = data;
    //     Data !== null && Data.map((element) => {
    //         if(element.usuario === user && element.password === password){
    //              dispatch(GetLogin(true));
    //              history.push('/');
    //         }
    //     })
    // }
    // useEffect(() => {
    //   Users();
    // }, [])
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