import doorImg from "../../assets/license/Door Supervisor Licence.png";
import cctvImg from "../../assets/license/CCTV (Public Space Surveillance).png";
import guardImg from "../../assets/license/Security Guard Licence.png";
import closeImg from "../../assets/license/Close Protection Licence.png";
import topupImg from "../../assets/license/SIA Top-Up Training.png";

export const licences = [
  {
    title: "Door Supervisor Licence",
    subtitle: "Front Line Licensed",
    description:
      "Work in bars, nightclubs and events managing entry, safety and conflict resolution.",
    image: doorImg,
    salary: "£10-15/hr",
    duration: "4 days training",
    valid: "3 years",
    price: "£185",
    popular: true,
    icon: "shield",
    iconColor: "bg-blue-600"
  },
  {
    title: "CCTV (Public Space Surveillance)",
    subtitle: "Public Space Surveillance",
    description:
      "Monitor public areas using CCTV systems and assist emergency services when required.",
    image: cctvImg,
    salary: "£11-16/hr",
    duration: "3 days training",
    valid: "3 years",
    price: "£165",
    popular: true,
    icon: "camera",
    iconColor: "bg-purple-600"
  },
  {
    title: "Security Guard Licence",
    subtitle: "Manned Guarding",
    description:
      "Protect businesses, construction sites and offices with patrol and access control duties.",
    image: guardImg,
    salary: "£9-13/hr",
    duration: "4 days training",
    valid: "3 years",
    price: "£175",
    popular: false,
    icon: "user",
    iconColor: "bg-green-600"
  },
  {
    title: "Close Protection Licence",
    subtitle: "VIP & Executive Protection",
    description:
      "Provide high-level security for VIPs, executives and high-risk individuals.",
    image: closeImg,
    salary: "£200-500/day",
    duration: "5 days training",
    valid: "3 years",
    price: "£995",
    popular: false,
    icon: "briefcase",
    iconColor: "bg-orange-600"
  },
  {
    title: "SIA Top-Up Training",
    subtitle: "Licence Renewal",
    description:
      "Mandatory refresher course required to renew your existing SIA licence.",
    image: topupImg,
    salary: "Maintain Licence",
    duration: "1 day training",
    valid: "3 years",
    price: "£95",
    popular: false,
    icon: "refresh",
    iconColor: "bg-indigo-600"
  }
];