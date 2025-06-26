import React from 'react';
import Marquee from 'react-fast-marquee';

import amazon from '../../../assets/brands/amazon.png';
//import google from '../../assets/brands/casio.png';
 import casio from '../../../assets/brands/casio.png';
 import moonstar from '../../../assets/brands/moonstar.png';
 import start from '../../../assets/brands/start-people 1.png';
 import randstad from '../../../assets/brands/randstad.png';
import people from "../../../assets/brands/start-people 1.png"
const ClientMarquee = () => {


    const logos = [amazon,casio, moonstar,start,randstad,people];
    return (
        <div>
                <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-primary font-bold text-center mb-12">Trusted by Leading Brands</h2>
        
        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-10 flex items-center">
              <img src={logo} alt={`Client Logo ${idx + 1}`} className="h-5 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
        </div>
    );
};

export default ClientMarquee;