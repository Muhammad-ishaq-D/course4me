import doorImg from "../../assets/license/Door Supervisor Licence.png";
import cctvImg from "../../assets/license/CCTV (Public Space Surveillance).png";
import guardImg from "../../assets/license/Security Guard Licence.png";
import closeImg from "../../assets/license/Close Protection Licence.png";
import topupImg from "../../assets/license/SIA Top-Up Training.png";

export const licences = [
  {
    title: "Door Supervisor Licence",
    subtitle: "Front Line Licensed",
    category: "SIA Training",
    description:
      "Work in bars, nightclubs and events managing entry, safety and conflict resolution.",
    image: doorImg,
    salary: "£10-15/hr",
    duration: "4 days training",
    valid: "3 years",
    pricing: "£185",
    isPopular: true,
    icon: "shield",
    iconColor: "bg-blue-600",
  },

  {
    title: "CCTV (Public Space Surveillance)",
    subtitle: "Public Space Surveillance",
    category: "SIA Training",
    description:
      "Monitor public areas using CCTV systems and assist emergency services when required.",
    image: cctvImg,
    salary: "£11-16/hr",
    duration: "3 days training",
    valid: "3 years",
    pricing: "£165",
    isPopular: true,
    icon: "camera",
    iconColor: "bg-purple-600",
  },

  {
    title: "Security Guard Licence",
    subtitle: "Manned Guarding",
    category: "SIA Training",
    description:
      "Protect businesses, construction sites and offices with patrol and access control duties.",
    image: guardImg,
    salary: "£9-13/hr",
    duration: "4 days training",
    valid: "3 years",
    pricing: "£175",
    isPopular: false,
    icon: "user",
    iconColor: "bg-green-600",
  },

  {
    title: "Close Protection Licence",
    subtitle: "VIP & Executive Protection",
    category: "SIA Training",
    description:
      "Provide high-level security for VIPs, executives and high-risk individuals.",
    image: closeImg,
    salary: "£200-500/day",
    duration: "16 days training",
    valid: "3 years",
    pricing: "£995",
    isPopular: true,
    icon: "briefcase",
    iconColor: "bg-orange-600",
  },

  {
    title: "SIA Top-Up Training",
    subtitle: "Licence Renewal",
    category: "SIA Training",
    description:
      "Mandatory refresher course required to renew your existing SIA licence.",
    image: topupImg,
    salary: "Maintain Licence",
    duration: "1 day training",
    valid: "3 years",
    pricing: "£95",
    isPopular: false,
    icon: "refresh",
    iconColor: "bg-indigo-600",
  },

  {
    title: "Emergency First Aid at Work",
    subtitle: "Level 3 Award",
    category: "First Aid",
    description:
      "Learn life-saving emergency first aid skills for workplaces and public environments.",
    image: topupImg,
    salary: "Required by Employers",
    duration: "1 day training",
    valid: "3 years",
    pricing: "£75",
    isPopular: true,
    icon: "heart",
    iconColor: "bg-red-600",
  },

  {
    title: "First Aid at Work",
    subtitle: "Workplace First Aid",
    category: "First Aid",
    description:
      "Comprehensive workplace first aid qualification covering injuries and emergencies.",
    image: doorImg,
    salary: "Career Enhancement",
    duration: "3 days training",
    valid: "3 years",
    pricing: "£195",
    isPopular: false,
    icon: "plus",
    iconColor: "bg-pink-600",
  },

  {
    title: "Fire Marshal Training",
    subtitle: "Fire Safety & Prevention",
    category: "Health & Safety",
    description:
      "Understand fire prevention, evacuation procedures and emergency response protocols.",
    image: guardImg,
    salary: "Workplace Requirement",
    duration: "1 day training",
    valid: "3 years",
    pricing: "£85",
    isPopular: true,
    icon: "flame",
    iconColor: "bg-orange-500",
  },

  {
    title: "Manual Handling Training",
    subtitle: "Health & Safety Compliance",
    category: "Health & Safety",
    description:
      "Reduce workplace injuries by learning proper lifting and manual handling techniques.",
    image: closeImg,
    salary: "Compliance Training",
    duration: "1 day training",
    valid: "3 years",
    pricing: "£65",
    isPopular: false,
    icon: "package",
    iconColor: "bg-yellow-600",
  },

  {
    title: "Conflict Management Training",
    subtitle: "Professional Communication",
    category: "Specialist",
    description:
      "Develop skills to handle workplace conflict, aggression and difficult situations professionally.",
    image: cctvImg,
    salary: "Professional Skill",
    duration: "2 days training",
    valid: "Certificate Included",
    pricing: "£120",
    isPopular: false,
    icon: "users",
    iconColor: "bg-teal-600",
  },
];
