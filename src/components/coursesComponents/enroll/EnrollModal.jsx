import { useState } from "react"
import StepPersonal from "./StepPersonal"
import StepSchedule from "./StepSchedule"
import StepDetails from "./StepDetails"
import StepPayment from "./StepPayment"
import PaymentSuccess from "./PaymentSuccess"
import ProgressBar from "./ProgressBar"
import { ArrowLeft, ArrowRight, Lock, User } from "lucide-react"

export default function EnrollModal({ course, onClose }) {

    const [step, setStep] = useState(1)
    const [data, setData] = useState({})
    const [success, setSuccess] = useState(false)

    const next = () => {
        setStep(prev => prev + 1)
    }

    const back = () => {
        setStep(prev => prev - 1)
    }

    const updateData = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }))
    }

    const canContinue = () => {

        if (step === 1) {
            return (
                data.firstName &&
                data.lastName &&
                data.email &&
                data.phone &&
                data.dob
            )
        }

        if (step === 2) {
            return (
                data.location &&
                data.date &&
                data.time
            )
        }

        if (step === 3) {
            return (
                data.experience &&
                data.contactName &&
                data.contactPhone &&
                data.medical
            )
        }

        if (step === 4) {
            return (
                data.cardNumber &&
                data.expiry &&
                data.cvc &&
                data.cardName &&
                data.postcode &&
                data.terms &&
                data.privacy
            )
        }

        return false
    }

    if (success) {
        return <PaymentSuccess course={course} onClose={onClose} />
    }

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-[900px] max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">

                {/* HEADER */}

                <div className="bg-gradient-to-r from-[#0f2942] to-[#1d3c5c] text-white p-6">

                    <div className="flex justify-between items-center">

                        <div className="flex items-center gap-4">
                            <div className="bg-[#22c55e] w-10 h-10 rounded-xl flex items-center justify-center">
                                <User size={18} />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Enroll Now</h2>
                                <p className="text-sm opacity-70">{course.title} - {course.price}</p>
                            </div>
                        </div>
                        <button onClick={onClose}>✕</button>

                    </div>

                    <ProgressBar step={step} />

                </div>

                {/* SCROLLABLE CONTENT */}

                <div className="flex-1 overflow-y-auto p-8">

                    {step === 1 && (
                        <StepPersonal
                            data={data}
                            updateData={updateData}
                        />
                    )}

                    {step === 2 && (
                        <StepSchedule
                            data={data}
                            updateData={updateData}
                        />
                    )}

                    {step === 3 && (
                        <StepDetails
                            data={data}
                            updateData={updateData}
                        />
                    )}

                    {step === 4 && (
                        <StepPayment
                            data={data}
                            updateData={updateData}
                        />
                    )}


                </div>

                {/* FIXED FOOTER */}

                <div className="flex justify-between items-center p-6 border-t border-gray-300 bg-white">

                    {/* BACK BUTTON */}

                    <button
                        onClick={step === 1 ? onClose : back}
                        className="flex items-center gap-2 border border-gray-300 text-[#0F2942] px-6 py-3 rounded-full hover:border-gray-400 transition"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </button>


                    {/* CONTINUE BUTTON */}

                    {step < 4 && (

                        <button
                            disabled={!canContinue()}
                            onClick={next}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition shadow-md
      ${canContinue()
                                    ? "bg-[#0F2942] text-white hover:bg-[#0b2238]"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"}
      `}
                        >
                            Continue
                            <ArrowRight size={16} />
                        </button>

                    )}


                    {/* PAYMENT BUTTON */}

                    {step === 4 && (

                        <button
                            disabled={!canContinue()}
                            onClick={() => setSuccess(true)}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition shadow-md
      ${canContinue()
                                    ? "bg-[#A4F03A] text-black hover:bg-[#95e02e]"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"}
      `}
                        >
                            <Lock size={16} />
                            Pay {course.price} & Enroll
                        </button>

                    )}

                </div>

            </div>

        </div>

    )

}

