import React, { useRef } from "react";
import { CreditCard, Landmark } from "lucide-react";

const CardPaymentModal = ({
  isOpen,
  onClose,
  cardData,
  setCardData,
  onPay,
}) => {
  const expiryRef = useRef(null);
  const cvvRef = useRef(null);

  if (!isOpen) return null;

  // =========================
  // CLOSE + RESET
  // =========================
  const handleClose = () => {
    setCardData({
      number: "",
      expiry: "",
      cvv: "",
    });

    onClose();
  };

  // =========================
  // CARD NUMBER FORMAT
  // =========================
  const handleCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);

    const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();

    setCardData({
      ...cardData,
      number: formatted,
    });

    // Auto focus expiry
    if (cleaned.length === 16) {
      expiryRef.current?.focus();
    }
  };

  // =========================
  // EXPIRY FORMAT
  // =========================
  const handleExpiry = (value) => {
    let cleaned = value.replace(/\D/g, "").slice(0, 4);

    // Auto month formatting
    if (cleaned.length === 1) {
      const firstDigit = parseInt(cleaned);

      if (firstDigit > 1) {
        cleaned = `0${firstDigit}`;
      }
    }

    let formatted = cleaned;

    // Auto slash after month
    if (cleaned.length >= 2) {
      formatted = `${cleaned.slice(0, 2)} / ${cleaned.slice(2, 4)}`;
    }

    setCardData({
      ...cardData,
      expiry: formatted,
    });

    // Auto focus CVV
    if (cleaned.length === 4) {
      cvvRef.current?.focus();
    }
  };

  // =========================
  // CVV
  // =========================
  const handleCVV = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);

    setCardData({
      ...cardData,
      cvv: cleaned,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="w-full max-w-[560px] rounded-[26px] bg-white border border-[#ECECEC] shadow-[0_25px_70px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="px-7 pt-7">
          <h2 className="text-[30px] font-bold text-[#1F2937]">
            Payment details
          </h2>

          <p className="mt-1 text-[13px] text-[#6B7280]">
            Secure checkout powered by Stripe
          </p>
        </div>

        {/* Body */}
        <div className="p-7">
          {/* Payment Tabs */}
          <div className="flex gap-3 mb-7">
            {/* Card */}
            <button className="flex-1 h-[78px] rounded-[16px] border-2 border-[#7C6CFF] bg-[#F6F4FF] px-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7C6CFF] flex items-center justify-center">
                <CreditCard size={18} className="text-white" />
              </div>

              <div className="text-left">
                <h3 className="text-[17px] font-semibold text-[#7C6CFF]">
                  Card
                </h3>
              </div>
            </button>

            {/* Ideal */}
            <button className="flex-1 h-[78px] rounded-[16px] border border-[#E5E7EB] bg-white px-5 flex items-center gap-3 hover:border-[#D1D5DB] transition">
              <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] flex items-center justify-center">
                <span className="font-bold text-[#111827] text-[15px]">iD</span>
              </div>

              <div className="text-left">
                <h3 className="text-[16px] font-medium text-[#6B7280]">
                  iDEAL
                </h3>
              </div>
            </button>

            {/* Bank */}
            <button className="flex-1 h-[78px] rounded-[16px] border border-[#E5E7EB] bg-white px-5 flex items-center gap-3 hover:border-[#D1D5DB] transition">
              <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] flex items-center justify-center">
                <Landmark size={18} className="text-[#6B7280]" />
              </div>

              <div className="text-left">
                <h3 className="text-[15px] font-medium text-[#6B7280]">
                  bancontact
                </h3>
              </div>
            </button>
          </div>

          {/* Card Number */}
          <div className="mb-5">
            <label className="block text-[15px] font-semibold text-[#4B5563] mb-2">
              Card number
            </label>

            <div className="relative">
              <input
                type="text"
                value={cardData.number}
                onChange={(e) => handleCardNumber(e.target.value)}
                placeholder="4242 4242 4242 4242"
                className="w-full h-[60px] rounded-[16px] border border-[#E5E7EB] bg-white px-5 pr-40 text-[18px] tracking-[1px] text-[#111827] placeholder:text-[#C0C4CC] outline-none focus:border-[#FF5C1B] focus:ring-4 focus:ring-orange-100 transition"
              />

              {/* Card Logos */}
              {/* Card Logos */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                {/* Visa */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="visa"
                  className="h-4 object-contain"
                />

                {/* American Express */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                  alt="amex"
                  className="h-5 object-contain"
                />

                {/* Mastercard */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="mastercard"
                  className="h-6 object-contain"
                />

                {/* UnionPay */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg"
                  alt="unionpay"
                  className="h-5 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Expiry + CVV */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Expiry */}
            <div>
              <label className="block text-[15px] font-semibold text-[#4B5563] mb-2">
                Expiration date
              </label>

              <input
                ref={expiryRef}
                type="text"
                value={cardData.expiry}
                onChange={(e) => handleExpiry(e.target.value)}
                placeholder="MM / YY"
                maxLength={7}
                className="w-full h-[58px] rounded-[16px] border border-[#E5E7EB] bg-white px-4 text-[17px] text-[#111827] placeholder:text-[#C0C4CC] outline-none focus:border-[#FF5C1B] focus:ring-4 focus:ring-orange-100 transition"
              />
            </div>

            {/* CVV */}
            <div>
              <label className="block text-[15px] font-semibold text-[#4B5563] mb-2">
                Security code
              </label>

              <div className="relative">
                <input
                  ref={cvvRef}
                  type="password"
                  value={cardData.cvv}
                  onChange={(e) => handleCVV(e.target.value)}
                  placeholder="CVC"
                  className="w-full h-[58px] rounded-[16px] border border-[#E5E7EB] bg-white px-4 pr-16 text-[17px] text-[#111827] placeholder:text-[#C0C4CC] outline-none focus:border-[#FF5C1B] focus:ring-4 focus:ring-orange-100 transition"
                />

                {/* CVC ICON */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[#9CA3AF]">
                  <CreditCard size={18} />

                  <span className="text-[13px] font-semibold">123</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={onPay}
            className="w-full h-[60px] rounded-[16px] bg-[#FF5C1B] hover:bg-[#E84E10] text-white text-[19px] font-semibold shadow-lg shadow-orange-100 transition-all duration-200"
          >
            Pay $24.90
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentModal;
