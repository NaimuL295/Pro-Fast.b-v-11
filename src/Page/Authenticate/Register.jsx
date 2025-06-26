import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';
const Register = () => {
  const {createUser}=useAuth()
  
  

    const {register,
 formState: { errors },
        handleSubmit }=useForm();

    const onSubmit=data=>{
        console.log(data);
        createUser(data?.email, data?.password).then((result) => {
          console.log(result);
          
        }).catch((err) => {
          console.log(err);
          
        });
    }
    return (
   <>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <h1 className='text-5xl font-bold'> Create An Account!</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"  {...register("email")}
           className="input" placeholder="Email" />
        {errors.email?.type==="required" &&
        <p className='text-red-500'> Email is require</p>
        }
          <label className="label">Password</label>
          <input type="password"
          {...register("password",
            {required:true,minLength:6})}

          className="input" placeholder="Password" />
           {errors.password?.type ==="required" &&
        <p className='text-red-500'>Password is require</p>
        }
           {errors.password?.type ==="minLength" &&
        <p className='text-red-500'>Password is most be 6 Character or longer </p>
        }
        
        </fieldset>
                 <button className="btn btn-primary mt-4">Register</button>
 
       </form>
        <p> <small>Already have account? </small>
         <Link to="/login" className="">login</Link></p>
         <SocialLogin></SocialLogin>
      </div>
    </div>
  
   </>
    );
};

export default Register;