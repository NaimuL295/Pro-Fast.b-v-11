import React from 'react';

const Frequently = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>

<div className='text-center  my-6 '>
  <h1 className='text-4xl font-bold'>Frequently Asked Question (FAQ)</h1>
<p className=''>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
</p></div>

            {/*  */}
            <div className="join space-y-5 join-vertical ">
  <div className="collapse collapse-arrow join-item border-base-300 border bg-[rgb(230,242,243)] rounded-2xl">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold p-4">How does this posture corrector work?</div>
    <div className="collapse-content text-sm  "><p className="p-4  border-t border-t-gray-300">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p></div>
  </div>
  <div className="collapse collapse-arrow join-item bg-base-200 border-base-300 border rounded-2xl">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
    <div className="collapse-content text-sm " ><p className='p-4  border-t border-t-gray-300'></p> Yes, the product is designed to be adjustable and flexible, making it comfortable and effective for people of all ages and body types.</div>
  </div>
  <div className="collapse collapse-arrow join-item bg-base-200 border-base-300 border rounded-2xl">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
    <div className="collapse-content text-sm "><p className='p-4   border-t border-t-gray-300'></p>  Absolutely. Many users have reported significant improvement 
      in posture and reduction in back pain with regular use It helps train your muscles to maintain 
      a healthy posture</div>
  </div>
 



  <div className="collapse collapse-arrow join-item bg-base-200 border-base-300 border rounded-2xl">
   
    <input type="radio" name="my-accordion-4 " /> 
  
    <div className="collapse-title font-semibold  ">How will I be notified when the product is back in stock?</div>
     <div className=''></div>
    <div className="collapse-content text-sm "> 
       <p className='p-4 border-t border-t-gray-300'>You can sign up for restock alerts on the product page. We'll send you an email as soon as it's available again.</p> </div>
  </div>
</div>
        </div>
    );
};

export default Frequently;