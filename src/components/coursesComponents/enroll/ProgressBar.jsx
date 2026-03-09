import { Check } from "lucide-react"

export default function ProgressBar({ step }) {

    const steps = ["Personal", "Schedule", "Details", "Payment"]

    return (

        <div className="flex items-center mt-6">

            {steps.map((label, index) => {

                const num = index + 1
                const completed = step > num
                const active = step === num

                return (

                    <div key={index} className="flex items-center">

                        {/* CIRCLE */}

                        <div
                            className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${completed ? "bg-[#A4F03A] text-black"
                                    : active ? "bg-[#A4F03A] text-black"
                                        : "bg-white/20 text-white"}
              `}
                        >

                            {completed ? (
                                <Check size={16} strokeWidth={3} />
                            ) : (
                                num
                            )}

                        </div>

                        {/* LABEL */}

                        <span
                            className={`
              ml-2 text-sm font-medium
              ${step >= num ? "text-[#A4F03A]" : "text-white/60"}
              `}
                        >
                            {label}
                        </span>

                        {/* CONNECTING LINE */}

                        {index !== steps.length - 1 && (
                            <div
                                className={`
                w-16 h-[2px] mx-4
                ${step > num ? "bg-[#A4F03A]" : "bg-white/20"}
                `}
                            />
                        )}

                    </div>

                )

            })}

        </div>

    )

}