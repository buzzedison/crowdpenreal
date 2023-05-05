import Footer from '@/components/Footer';
import React from 'react';
import { useRouter } from 'next/router';


const Donate = () => {
    const router = useRouter();

  const handleStripeClick = () => {
    const stripeUrl = 'https://donate.stripe.com/7sIdUJ42O3te4s8eV2';
    router.push(stripeUrl);
  };

  const handlePaystackClick = () => {
    const paystackUrl = 'https://paystack.com/pay/crowdpen';
    router.push(paystackUrl);
  };

  

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Donate to Crowdpen</h1>
      <p className="mb-6">
        Support African creativity by donating to Crowdpen. Choose your preferred
        payment provider below.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-red-600 text-white px-6 py-3 rounded font-medium hover:bg-red-700"
          onClick={handleStripeClick}
        >
          Donate with Stripe
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700"
          onClick={handlePaystackClick}
        >
          Donate with Paystack
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Donate;
