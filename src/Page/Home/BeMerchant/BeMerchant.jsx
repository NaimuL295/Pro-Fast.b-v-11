import React from 'react';


import locationMerchant from "../../../assets/location-merchant.png"
const BeMerchant = () => {
    return (
        
           
           <div     data-aos="zoom-in-up"
      data-aos-duration="4000" className="bg-no-repeat  bg-[url('assets/be-a-merchant-bg.png')]     bg-[rgb(3,55,61)] my-8 p-20 rounded-2xl ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={locationMerchant}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
         We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
     <div className='lg:flex space-x-3'> <button className="  rounded-full btn  text-black btn-primary">Become a Merchant</button>
      <button className=" rounded-full hover:text-black btn btn-primary text-primary btn-outline ms-4 rounded-ful">Earn with Profast Courier</button></div>
    </div>
  </div>
</div>     
           
       
    );
};

export default BeMerchant;