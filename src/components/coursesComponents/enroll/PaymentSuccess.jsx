export default function PaymentSuccess({ course, onClose }) {

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-[420px] rounded-2xl p-6 text-center">

                {/* Success Icon */}

                <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Title */}

                <h2 className="text-xl font-bold text-[#0F2942] mb-2">
                    Payment Successful!
                </h2>

                {/* Description */}

                <p className="text-gray-500 text-xs leading-relaxed mb-5">
                    You have successfully enrolled in{" "}
                    <span className="font-semibold text-gray-700">
                        {course?.title}
                    </span>.
                    A confirmation & receipt has been sent to
                    <span className="font-semibold"> s@gmail.com</span>.
                </p>

                {/* Info Card */}

                <div className="bg-gradient-to-r from-[#0F2942] to-[#163A5C] text-white rounded-xl p-4 text-left mb-5">

                    <div className="grid grid-cols-2 gap-y-3 text-sm">

                        <div>
                            <p className="text-gray-300 text-xs">Course</p>
                            <p className="font-semibold">{course?.title}</p>
                        </div>

                        <div>
                            <p className="text-gray-300 text-xs">Location</p>
                            <p className="font-semibold">Sheffield</p>
                        </div>

                        <div>
                            <p className="text-gray-300 text-xs">Date</p>
                            <p className="text-[#A4F03A] font-semibold">March 27, 2026</p>
                        </div>

                        <div>
                            <p className="text-gray-300 text-xs">Amount Paid</p>
                            <p className="text-[#A4F03A] font-semibold">{course?.price}</p>
                        </div>

                    </div>

                    <div className="border-t border-white/20 my-3"></div>

                    <div className="flex justify-between items-center text-sm">

                        <div>
                            <p className="text-gray-300 text-xs">Booking Reference</p>
                            <p className="text-[#A4F03A] font-semibold tracking-wider">
                                GL-UZA8N8AA
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-gray-300 text-xs">Payment via</p>
                            <p className="font-semibold">Card •••• 4444</p>
                        </div>

                    </div>

                </div>

                {/* Close Button */}

                <button
                    onClick={onClose}
                    className="w-full bg-[#A4F03A] hover:bg-[#9BE038] text-[#0F2942] font-semibold py-2.5 rounded-full text-sm transition"
                >
                    Close
                </button>

            </div>

        </div>
    );
}