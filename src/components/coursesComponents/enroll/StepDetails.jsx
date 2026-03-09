import { FileText, Shield, Info, Phone } from "lucide-react";

export default function StepDetails({ data, updateData }) {

    return (
        <div>

            {/* Title */}

            <div className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-[#A4F03A]" />
                <h3 className="text-lg font-semibold text-[#0F2942]">
                    Additional Details
                </h3>
            </div>

            {/* Top Inputs */}

            <div className="grid grid-cols-2 gap-5 mb-6">

                {/* SIA Licence */}

                <div>

                    <label className="text-sm font-medium text-gray-700">
                        Existing SIA Licence Number
                    </label>

                    <div className="relative mt-2">

                        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                        <input
                            placeholder="Optional"
                            value={data.siaLicence || ""}
                            onChange={(e) => updateData("siaLicence", e.target.value)}
                            className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                        />

                    </div>

                </div>

                {/* Experience */}

                <div>

                    <label className="text-sm font-medium text-gray-700">
                        Security Experience
                    </label>

                    <input
                        placeholder=""
                        value={data.experience || ""}
                        onChange={(e) => updateData("experience", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                    />

                </div>

            </div>

            {/* Emergency Contact Card */}

            <div className="bg-gray-100 rounded-2xl p-6 mb-6">

                <div className="flex items-center gap-2 mb-4">

                    <Info className="w-4 h-4 text-[#A4F03A]" />

                    <h4 className="text-sm font-semibold text-[#0F2942]">
                        Emergency Contact (Recommended)
                    </h4>

                </div>

                <div className="grid grid-cols-2 gap-4">

                    {/* Contact Name */}

                    <div>

                        <label className="text-sm font-medium text-gray-700">
                            Contact Name
                        </label>

                        <input
                            placeholder="Full name"
                            value={data.contactName || ""}
                            onChange={(e) => updateData("contactName", e.target.value)}
                            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                        />

                    </div>

                    {/* Contact Phone */}

                    <div>

                        <label className="text-sm font-medium text-gray-700">
                            Contact Phone
                        </label>

                        <div className="relative mt-2">

                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                            <input
                                placeholder="Phone number"
                                value={data.contactPhone || ""}
                                onChange={(e) => updateData("contactPhone", e.target.value)}
                                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Medical Requirements */}

            <div>

                <label className="text-sm font-medium text-gray-700">
                    Special Requirements or Medical Conditions
                </label>

                <textarea
                    rows={4}
                    placeholder="Any dietary, accessibility, or medical needs we should know about..."
                    value={data.medical || ""}
                    onChange={(e) => updateData("medical", e.target.value)}
                    className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#A4F03A]"
                />

            </div>

        </div>
    );

}