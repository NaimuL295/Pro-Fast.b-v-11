import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router';
import SocialLogin from './SocialLogin';
import { useNavigate } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const {signUse}=useAuth()
const location=useLocation()
const navigate= useNavigate()
const from=location.state?.from ||"/"
    const {register,
formState: { errors },
    handleSubmit}=useForm()

    const onSubmit=data=>{
       signUse(data?.email, data?.password).then((result) => {
        console.log(result);
        navigate(from)
       }).catch((err) => {
        console.log(err);
        
       });
        
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <h1 className='text-5xl font-bold'>Please Login</h1>
 <form  onSubmit={handleSubmit(onSubmit)}>  
    <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
           {...register("email")}
          
          className="input" placeholder="Email" />
       
          <label className="label">Password</label>
          <input type="password" 
          {...register("password",
             {required:true,
            minLength:6
        
        })}
          
          className="input" placeholder="Password" />
          
          {
          errors.password?.type === "require"&
       <p className='text-red-500'>password  is require </p>
       }
       {errors.password?.type ==="minLength" &&
        <p className='text-red-500'>password Most be 6 Character or longer</p>}
        
          <div><a className="link link-hover">Forgot password?</a></div>
       
        
        </fieldset>
               <button type='submit' className="btn btn-primary mt-4">Login</button> 
        </form> 
          <p> <small>New to this website  </small>
         <Link to="/register" className="">register</Link></p>
     <SocialLogin></SocialLogin>
        </div>
       
        </div>
        </div>
    );
};

export default Login;