import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'

const SimpleCardForm = ({ handlePayment }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const res = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (res.error) {
        setPaymentError(res.error.message ? res.error.message : '')
        setPaymentSuccess('');
      } else {
        const paymentId = res.paymentMethod.id;
        if (paymentId) {
          setPaymentSuccess(paymentId);
          setPaymentError('');
          handlePayment(paymentId)
        }
      }
    }
  };
  if (paymentSuccess) {
    Swal.fire(
      'Great!',
      'You successfully subscribed!',
      'success'
    )
    router.push('/SubscriberList')
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <CardElement id="card-element" />

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to Checkout</button>
      </form >
      {
        paymentError && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>Your Payment is successful</p>
      }
    </div>
  );
};

export default SimpleCardForm;