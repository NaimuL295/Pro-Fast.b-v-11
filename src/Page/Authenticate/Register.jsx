import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAxios from '../../Hook/useAxios';

const Register = () => {
  const {createUser,updateUserProfile}=useAuth()
  const [profile,setProfile, ]=useState('')
  const Axios=useAxios()

    const {register,
 formState: { errors },
        handleSubmit }=useForm();

    const onSubmit=data=>{
        console.log(data);
        createUser(data?.email, data?.password).
        then( async(result) => {
          console.log(result.user);

          const  userInfo={
            email: data.email,
            role:'user',
            create_at:new Date().toISOString(),
            last_log:new Date().toISOString()
          }
          const userRes=await Axios.post("/users",userInfo)
            
       
       
        
         console.log(userRes.data);
         
          const userProfile={
            displayName:data.name, 
            photoURL:profile
          }
          updateUserProfile(userProfile).then(() => {
          console.log('photo  upload');
          
          }).catch((err) => {
            console.log(err);
            
          });
        }).catch((err) => {
          console.log(err);
          
        });
    }


          
    const handleImageURl =async(e)=>{
   const image=e.target.files[0]
   console.log(image);

   const fromData=new FormData();
   fromData.append("image",image);
   const imgUploadURl=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`
const res= await axios.post(imgUploadURl,fromData)
  setProfile(res.data.data.url );
  
}
    return (
   <>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <h1 className='text-5xl font-bold'> Create An Account!</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset">
     
          <label className="label"> Your Name</label>
       
          <input type="text"  {...register("Name")}
           className="input" placeholder="Your Name" />
        {errors.name?.type==="required" &&
        <p className='text-red-500'> Name is require</p>
        }
        {/* photo */}


             <label className="label"> photo</label>
          <input type="file" 
          onChange={handleImageURl}
           className="input"  placeholder="Your img" />
        {/* {errors.email?.type==="required" &&
        <p className='text-red-500'> Name is require</p>
        } */}
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