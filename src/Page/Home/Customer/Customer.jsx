import React from 'react';
import customer from "../../../assets/customer-top.png"
const Customer = () => {
    return (
        <div className='text-center space-y-2 my-10'>
         <div className='flex justify-center'>   <img src={customer} alt="" /></div>
            <h3  className='text-4xl font-bold'>What our customers are sayings</h3>
            <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default Customer;