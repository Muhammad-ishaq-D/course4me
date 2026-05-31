import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

// Load stripe once using the publishable key from Vite env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Inner form – must be rendered inside <Elements>
function CheckoutForm({ bookingRef, onClose }) {
  const stripe = useStripe();
  const elements = useElements();
  const [payError, setPayError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setPayError(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Include bookingRef so BookingSuccess page can fetch the booking
        return_url: `${window.location.origin}/booking-success?bookingRef=${bookingRef}`,
      },
    });

    // confirmPayment only reaches here on failure (on success Stripe redirects)
    if (error) {
      setPayError(error.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PaymentElement />
      {payError && (
        <p className="text-red-500 text-sm font-medium">{payError}</p>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-[#F15A24] hover:bg-[#d04e1e] disabled:opacity-60 text-white py-3 rounded-lg font-black text-sm transition-colors"
      >
        {processing ? 'Processing…' : 'Pay Now'}
      </button>
    </form>
  );
}

export default function StripePaymentModal({ clientSecret, bookingRef, isOpen, onClose }) {
  if (!isOpen || !clientSecret) return null;

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: { colorPrimary: '#F15A24' },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-md relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-[#1C1C1C]">Complete Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm bookingRef={bookingRef} onClose={onClose} />
        </Elements>

        {/* Security note */}
        <p className="text-center text-[11px] text-gray-400 mt-4">
          🔒 Payments are secured and encrypted by Stripe
        </p>
      </div>
    </div>
  );
}
