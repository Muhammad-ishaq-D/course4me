import { Apple, CircleDollarSign, CreditCard, FileText, Lock, Wallet } from "lucide-react";


export default function StepPayment({ course, data, updateData }) {

    const payFull = data.paymentType !== "deposit";

    return (

        <div className="space-y-8">

            {/* ORDER SUMMARY */}

            <div className="bg-[#F4F6F8] border border-gray-200 rounded-2xl p-6">

                {/* Header */}

                <div className="flex items-center gap-2 mb-5">
                    <FileText className="w-4 h-4 text-[#A4F03A]" />
                    <h4 className="font-semibold text-[#0F2942]">
                        Order Summary
                    </h4>
                </div>


                {/* Layout */}

                <div className="grid grid-cols-2 gap-y-1 text-sm">

                    {/* Row 1 */}

                    <p className="font-medium text-[#0F2942] text-base">
                        {course?.title}
                    </p>

                    <p className="text-right font-semibold text-[#0F2942] text-base">
                        {course?.price}
                    </p>


                    {/* Row 2 */}

                    <p className="text-gray-500">
                        {data.location || "Sheffield"} · {data.date || "March 27, 2026"}
                    </p>

                    <p className="text-right text-gray-500">
                        {course?.duration}
                    </p>


                    {/* Row 3 */}

                    <div></div>

                    <p className="text-right text-gray-500">
                        {data.time || "09:00 AM - 05:00 PM"}
                    </p>

                </div>

            </div>

            {/* PAYMENT AMOUNT */}

            <div>

                <div className="flex items-center gap-2 mb-4">
                    <Wallet className="w-4 h-4 text-[#A4F03A]" />
                    <h4 className="font-semibold text-[#0F2942]">
                        Payment Amount
                    </h4>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    {/* FULL PAYMENT */}

                    <div
                        onClick={() => updateData("paymentType", "full")}
                        className={`rounded-xl border p-6 cursor-pointer transition
              ${payFull
                                ? "bg-[#A4F03A] border-[#A4F03A]"
                                : "border-gray-300 hover:border-gray-400"}
            `}
                    >

                        <p className="font-medium text-[#0F2942]">
                            Pay in Full
                        </p>

                        <p className="text-3xl font-bold text-[#0F2942]">
                            {course?.price}
                        </p>

                        <p className="text-sm text-[#0F2942]/70">
                            One-time payment · Best value
                        </p>

                    </div>

                    {/* DEPOSIT */}

                    <div
                        onClick={() => updateData("paymentType", "deposit")}
                        className={`rounded-xl border p-6 cursor-pointer transition
              ${!payFull
                                ? "bg-[#A4F03A] border-[#A4F03A]"
                                : "border-gray-300 hover:border-gray-400"}
            `}
                    >

                        <p className="font-medium text-[#0F2942]">
                            Reserve with Deposit
                        </p>

                        <p className="text-3xl font-bold text-[#0F2942]">
                            £50
                        </p>

                        <p className="text-sm text-gray-500">
                            Remaining due before course starts
                        </p>

                    </div>

                </div>

            </div>

            {/* PAYMENT METHOD */}

            <div>

                <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-4 h-4 text-[#A4F03A]" />
                    <h4 className="font-semibold text-[#0F2942]">
                        Payment Method
                    </h4>
                </div>

                <div className="grid grid-cols-4 gap-3">

                    <button
                        onClick={() => updateData("paymentMethod", "card")}
                        className={`flex items-center justify-center gap-2 border rounded-xl py-3
              ${data.paymentMethod === "card"
                                ? "bg-[#A4F03A] border-[#A4F03A]"
                                : "border-gray-300"}
            `}
                    >
                        <CreditCard size={16} />
                        Card
                    </button>

                    <button className="border rounded-xl py-3 flex items-center justify-center gap-2">
                        <Apple size={16} />
                        Apple Pay
                    </button>

                    <button className="border rounded-xl py-3 flex items-center justify-center gap-2">
                        <CircleDollarSign size={16} />
                        Google Pay
                    </button>

                    <button className="border rounded-xl py-3 flex items-center justify-center gap-2">
                        <CircleDollarSign size={16} />
                        PayPal
                    </button>

                </div>

            </div>

            {/* CARD FORM */}

            <div className="bg-gray-100 rounded-2xl p-6 space-y-4">

                {/* CARD NUMBER */}

                <div>

                    <label className="text-sm font-medium">
                        Card Number <span className="text-red-500">*</span>
                    </label>

                    <div className="relative mt-2">

                        <CreditCard className="absolute left-4 top-4.5 text-gray-400" size={16} />

                        <input
                            placeholder="1234 5678 9012 3456"
                            value={data.cardNumber || ""}
                            onChange={(e) => updateData("cardNumber", e.target.value)}
                            className="w-full border border-[#A4F03A] rounded-xl pl-10 pr-4 py-3"
                        />

                    </div>

                </div>

                {/* EXPIRY + CVC */}

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="text-sm font-medium">
                            Expiry Date <span className="text-red-500">*</span>
                        </label>

                        <input
                            placeholder="MM / YY"
                            value={data.expiry || ""}
                            onChange={(e) => updateData("expiry", e.target.value)}
                            className="w-full border border-red-300 rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            CVC <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">

                            <input
                                placeholder="123"
                                value={data.cvc || ""}
                                onChange={(e) => updateData("cvc", e.target.value)}
                                className="w-full border border-red-300 rounded-xl px-4 py-3"
                            />

                            <Lock className="absolute right-3 top-4 text-gray-400" size={16} />

                        </div>

                    </div>

                </div>

                {/* NAME */}

                <div>

                    <label className="text-sm font-medium">
                        Cardholder Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        placeholder="Name on card"
                        value={data.cardName || ""}
                        onChange={(e) => updateData("cardName", e.target.value)}
                        className="w-full border border-red-300 rounded-xl px-4 py-3"
                    />

                </div>

                {/* POSTCODE */}

                <div>

                    <label className="text-sm font-medium">
                        Billing Postcode <span className="text-red-500">*</span>
                    </label>

                    <input
                        placeholder="SW1A 1AA"
                        value={data.postcode || ""}
                        onChange={(e) => updateData("postcode", e.target.value)}
                        className="w-full border border-red-300 rounded-xl px-4 py-3"
                    />

                </div>

                <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Lock size={14} />
                    Secured by Stripe
                </div>

            </div>

            {/* TERMS */}

            <div className="space-y-4 text-sm">

                <label className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={data.terms || false}
                        onChange={(e) => updateData("terms", e.target.checked)}
                        className="top-1"
                    />
                    I agree to the Terms & Conditions and Cancellation Policy
                </label>

                <label className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={data.privacy || false}
                        onChange={(e) => updateData("privacy", e.target.checked)}
                    />
                    I consent to my data being processed in accordance with the Privacy Policy
                </label>

            </div>

            {/* SUMMARY BAR */}

            <div className="bg-[#0F2942] text-white rounded-2xl px-8 py-6 flex justify-between items-center">

                {/* LEFT SIDE */}

                <div className="flex flex-col">

                    <p className="text-lg font-semibold">
                        {course?.title}
                    </p>

                    <p className="text-sm text-white/70">
                        {course?.duration} · {data.location || "Sheffield"}
                    </p>

                </div>


                {/* RIGHT SIDE */}

                <div className="flex flex-col items-end">

                    <p className="text-sm text-white/70">
                        Total due now
                    </p>

                    <p className="text-3xl font-bold text-[#A4F03A]">
                        {payFull ? course?.price : "£50"}
                    </p>

                </div>

            </div>
        </div>

    )

}