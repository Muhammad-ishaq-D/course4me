import {
    ChevronDown,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

export default function TopNav() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-[#efefef] border-b border-gray-300">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[40px] px-3 sm:px-4">

                {/* Left */}
                <div className="flex items-center text-[11px] sm:text-[12px] font-medium text-[#5E5E5E] tracking-wide cursor-pointer">
                    <span className="uppercase">Go To</span>
                    <ChevronDown size={14} className="ml-1" />
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-[12px] text-gray-600">

                    {/* Quick Links */}
                    <div className="flex items-center font-medium uppercase tracking-wide  text-[#5E5E5E] cursor-pointer">
                        <span className="hidden sm:inline">Quick Links</span>
                        <span className="sm:hidden">Links</span>
                        <ChevronDown size={14} className="ml-1" />
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block h-[14px] w-[1px] bg-gray-300"></div>

                    {/* Social Label (hide on small screens) */}
                    <span className="hidden md:block uppercase tracking-wide text-gray-500 whitespace-nowrap">
                        We're Big On Socials
                    </span>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-500">
                        <Facebook size={14} strokeWidth={1.8} className="cursor-pointer hover:text-black transition" />
                        <Twitter size={14} strokeWidth={1.8} className="cursor-pointer hover:text-black transition" />
                        <Instagram size={14} strokeWidth={1.8} className="cursor-pointer hover:text-black transition" />
                        <Linkedin size={14} strokeWidth={1.8} className="cursor-pointer hover:text-black transition" />
                        <Youtube size={14} strokeWidth={1.8} className="cursor-pointer hover:text-black transition" />
                    </div>

                </div>
            </div>
        </div>
    );
}