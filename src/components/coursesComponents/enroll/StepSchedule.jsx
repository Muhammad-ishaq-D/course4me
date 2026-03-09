import { Calendar, Clock, MapPin } from "lucide-react";

export default function StepSchedule({ data, updateData }) {

    const dates = [
        { date: "March 10, 2026", duration: "4 days course" },
        { date: "March 24, 2026", duration: "4 days course" },
        { date: "April 7, 2026", duration: "4 days course" }
    ];

    const timeSlots = [
        "09:00 AM - 05:00 PM",
        "10:00 AM - 06:00 PM"
    ];

    return (

        <div>

            {/* Section Header */}

            <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-[#A4F03A]" />
                <h3 className="text-lg font-semibold text-[#0F2942]">
                    Choose Your Schedule
                </h3>
            </div>

            {/* Location */}

            <label className="text-sm font-medium text-gray-700">
                Preferred Location <span className="text-red-500">*</span>
            </label>

            <div className="relative mt-2 mb-6">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                <input
                    value={data.location || ""}
                    onChange={(e) => updateData("location", e.target.value)}
                    placeholder=""
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                />
            </div>

            {/* Available Dates */}

            {data.location && (

                <>
                    <label className="text-sm font-medium text-gray-700">
                        Available Start Dates <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-2 gap-4 mt-4 mb-6">

                        {dates.map((item, index) => {

                            const active = data.date === item.date;

                            return (

                                <div
                                    key={index}
                                    onClick={() => updateData("date", item.date)}
                                    className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition
                    ${active
                                            ? "bg-[#A4F03A] border-[#A4F03A]"
                                            : "border-gray-300 hover:border-gray-400"}
                  `}
                                >

                                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg
                    ${active ? "bg-white/20" : "bg-gray-100"}
                  `}>
                                        <Calendar className="w-5 h-5 text-[#0F2942]" />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-[#0F2942]">
                                            {item.date}
                                        </p>

                                        <p className="text-sm text-gray-600">
                                            {item.duration}
                                        </p>
                                    </div>

                                </div>

                            )

                        })}

                    </div>
                </>
            )}

            {/* Time Slot */}

            {data.date && (

                <>
                    <label className="text-sm font-medium text-gray-700">
                        Time Slot
                    </label>

                    <div className="grid grid-cols-2 gap-4 mt-4">

                        {timeSlots.map((slot, index) => {

                            const active = data.time === slot;

                            return (

                                <div
                                    key={index}
                                    onClick={() => updateData("time", slot)}
                                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition
                    ${active
                                            ? "bg-[#A4F03A] border-[#A4F03A]"
                                            : "border-gray-300 hover:border-gray-400"}
                  `}
                                >

                                    <Clock className="w-4 h-4 text-[#0F2942]" />

                                    <span className="font-medium text-[#0F2942]">
                                        {slot}
                                    </span>

                                </div>

                            )

                        })}

                    </div>
                </>
            )}

        </div>

    );
}