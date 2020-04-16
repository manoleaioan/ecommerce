import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_d2zuBz35LexSf3kNPPTTeyTr00Dt1wn1j5';

  return(
    <StripeCheckout 
      label='Pay Now'
      name='Ecommerce Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;