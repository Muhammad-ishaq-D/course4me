import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { Loader2, Lock } from 'lucide-react';

// Load stripe once – key from Vite env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

/* ─────────────────────────────────────────────
   Inner form – must live inside <Elements>
───────────────────────────────────────────── */
function CheckoutForm({ bookingRef, onClose, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();

  const [isReady, setIsReady] = useState(false);   // PaymentElement mounted?
  const [processing, setProcessing] = useState(false);
  const [payError, setPayError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !isReady) return;

    setProcessing(true);
    setPayError(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Fallback for redirect-required flows (3DS, bank redirects, etc.)
        return_url: `${window.location.origin}/booking-success?bookingRef=${bookingRef}`,
      },
      // For card payments, resolve in-app without a full redirect
      redirect: 'if_required',
    });

    if (error) {
      // Card declined, validation error, etc.
      setPayError(error.message);
      setProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Payment confirmed in-app — hand back to parent to show confirmation
      onSuccess?.();
    } else {
      // Unexpected state
      setPayError('Payment could not be confirmed. Please try again.');
      setProcessing(false);
    }
  };

  const isDisabled = !stripe || !elements || !isReady || processing;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Stripe PaymentElement – calls onReady when fully loaded */}
      <div className={`transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <PaymentElement onReady={() => setIsReady(true)} />
      </div>

      {/* Skeleton placeholder while element loads */}
      {!isReady && (
        <div className="flex items-center justify-center gap-2 py-8 text-gray-400 text-sm">
          <Loader2 size={18} className="animate-spin" />
          <span>Loading secure payment form…</span>
        </div>
      )}

      {/* Inline error */}
      {payError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
          {payError}
        </div>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full flex items-center justify-center gap-2 bg-[#F15A24] hover:bg-[#d04e1e] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-black text-sm transition-colors"
      >
        {processing ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Processing…
          </>
        ) : (
          <>
            <Lock size={14} />
            Pay Now
          </>
        )}
      </button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   Modal wrapper
───────────────────────────────────────────── */
export default function StripePaymentModal({ clientSecret, bookingRef, isOpen, onClose, onSuccess }) {
  if (!isOpen || !clientSecret) return null;

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#F15A24',
        borderRadius: '8px',
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 py-4 sm:py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-black text-[#1C1C1C]">Complete Payment</h2>
            <p className="text-xs text-gray-400 mt-0.5">Your booking is reserved — enter card details below</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm bookingRef={bookingRef} onClose={onClose} onSuccess={onSuccess} />
        </Elements>

        {/* Security badge */}
        <p className="text-center text-[11px] text-gray-400 mt-5 flex items-center justify-center gap-1">
          <Lock size={10} /> Payments are secured and encrypted by Stripe
        </p>
      </div>
    </div>
  );
}
