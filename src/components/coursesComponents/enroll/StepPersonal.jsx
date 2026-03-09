import { User, Mail, Phone, Calendar } from "lucide-react";

export default function StepPersonal({ data, updateData }) {
    return (
        <div>

            {/* Header */}

            <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-[#8BE04E]" />
                <h3 className="text-lg font-semibold text-[#0F2942]">
                    Personal Information
                </h3>
            </div>

            {/* Form Grid */}

            <div className="grid grid-cols-2 gap-5">

                {/* First Name */}

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        First Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        placeholder="John"
                        value={data.firstName || ""}
                        onChange={(e) => updateData("firstName", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BE04E]"
                    />
                </div>

                {/* Last Name */}

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Last Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        placeholder="Smith"
                        value={data.lastName || ""}
                        onChange={(e) => updateData("lastName", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BE04E]"
                    />
                </div>

                {/* Email */}

                <div className="relative">
                    <label className="text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                    </label>

                    <Mail className="absolute left-3 top-[50px] w-4 h-4 text-gray-400" />

                    <input
                        placeholder="john.smith@email.com"
                        value={data.email || ""}
                        onChange={(e) => updateData("email", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BE04E]"
                    />
                </div>

                {/* Phone */}

                <div className="relative">
                    <label className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                    </label>

                    <Phone className="absolute left-3 top-[50px] w-4 h-4 text-gray-400" />

                    <input
                        placeholder="07XXX XXX XXX"
                        value={data.phone || ""}
                        onChange={(e) => updateData("phone", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BE04E]"
                    />
                </div>

                {/* Date */}

                <div className="relative col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                        Date of Birth <span className="text-red-500">*</span>
                    </label>

                    <Calendar className="absolute left-3 top-[50px] w-4 h-4 text-gray-400" />

                    <input
                        type="date"
                        value={data.dob || ""}
                        onChange={(e) => updateData("dob", e.target.value)}
                        className="mt-2 w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BE04E]"
                    />
                </div>

            </div>

        </div>
    );
}