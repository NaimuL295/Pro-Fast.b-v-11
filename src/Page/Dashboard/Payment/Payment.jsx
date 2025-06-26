import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentFrom from '../PaymentFrom/PaymentFrom';


const stripePromise = loadStripe(import.meta.env.VITE_payment_Key)

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
          <PaymentFrom></PaymentFrom>
        </Elements>
    );
};

export default Payment;