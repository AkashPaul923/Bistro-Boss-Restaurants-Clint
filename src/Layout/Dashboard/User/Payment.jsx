import React from 'react';
import SectionTitle from '../../../Components/Shared/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO
const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionTitle title="Payment" subTitle="Make payment to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;