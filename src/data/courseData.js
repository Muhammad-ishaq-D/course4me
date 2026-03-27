// src/data/courseData.js
import doorImg from "../assets/courses/door.png";
import cctvImg from "../assets/courses/cctv.png";
import firstAidImg from "../assets/courses/first-aid.png";
import securityImg from "../assets/courses/security-guard.png";

export const courses = {
  "door-supervisor": {
    id: "door-supervisor",
    title: "Door Supervisor Training",
    subtitle: "Complete SIA Door Supervisor Licence Course",
    heroImage: doorImg,
    price: "£185.00",
    duration: "6 days",
    rating: "4.9",
    reviews: "15,200",
    booked: "8,450",
    level: "Level 2 Award for Door Supervisors",
    highlights: ["SIA Licensed Training", "Physical Intervention", "Conflict Management", "SIA Approved"],
    about: "The SIA Door Supervisor course is the most popular choice for those looking to work in the private security industry. This qualification allows you to work in a wide range of environments, including pubs, clubs, events, and retail. It covers everything from professional conduct to physical intervention techniques.",
    learn: [
      "Roles and responsibilities of door supervisors",
      "Conflict management and resolution",
      "Physical intervention skills",
      "Emergency procedures and first aid",
      "Drug awareness and licensing law",
      "Search procedures and equipment",
      "Counter-terrorism awareness",
      "Communication and customer service"
    ],
    whoFor: [
      "Individuals seeking to work in venues with alcohol",
      "Security guards wanting to upgrade their licence",
      "Event security and festival staff",
      "Career changers entering the security industry"
    ],
    requirements: [
      "Must be 18 years or older",
      "Must have a valid First Aid qualification (or take it with this course)",
      "Must have the right to work in the UK",
      "Basic English communication skills"
    ]
  },
  "cctv-training": {
    id: "cctv-training",
    title: "CCTV Training",
    subtitle: "SIA Public Space Surveillance Certification",
    heroImage: cctvImg,
    price: "£185.00",
    duration: "3 days",
    rating: "4.9",
    reviews: "9,800",
    booked: "3,120",
    level: "Level 2 Award in CCTV Operations",
    highlights: ["Public Space Surveillance", "Legal & Tech Training", "Evidence Handling", "SIA Approved"],
    about: "The SIA CCTV Operator course is designed for those who want to work in a control room monitoring public spaces. This course provides you with the skills to operate CCTV equipment effectively and understand the legal framework surrounding surveillance and data protection.",
    learn: [
      "Operating CCTV equipment and consoles",
      "Legal aspects of surveillance (GDPR)",
      "Communication in control rooms",
      "Dealing with incidents and emergencies",
      "Surveillance techniques and observation",
      "Evidence handling and reporting",
      "Health and safety in control rooms",
      "Principles of CCTV systems"
    ],
    whoFor: [
      "People wanting to work in security control rooms",
      "Local authority surveillance staff",
      "Retail security monitoring teams",
      "Corporate security personnel"
    ],
    requirements: [
      "Must be 18 years or older",
      "No previous experience required",
      "Attention to detail and focus",
      "Ability to work long shifts"
    ]
  },
  "first-aid-at-work": {
    id: "first-aid-at-work",
    title: "First Aid at Work",
    subtitle: "Level 3 Emergency First Aid Certification",
    heroImage: firstAidImg,
    price: "£150.00",
    duration: "3 days",
    rating: "4.9",
    reviews: "12,500",
    booked: "5,210",
    level: "Level 3 Emergency First Aid At Work",
    highlights: ["CPRD and Training", "Wound Management", "Emergency Scenarios", "HSE Certified"],
    about: "Our Level 3 First Aid at Work course is a nationally recognized qualification that equips you with the skills and knowledge to handle workplace emergencies confidently. Covering CPR, AED use, wound management, and medical emergency scenarios, it's essential for all professionals.",
    learn: [
      "Cardiopulmonary resuscitation (CPR)",
      "Automated External Defibrillator (AED) use",
      "Managing unconscious casualties",
      "Treating burns, bleeding, and shock",
      "Choking response procedures",
      "Head, neck, and spinal injuries",
      "Seizures and diabetic emergency management",
      "Record keeping and reporting"
    ],
    whoFor: [
      "Security professionals needing certification",
      "Workplace first aiders and H&S officers",
      "Teachers and childcare workers",
      "Anyone wanting life-saving skills"
    ],
    requirements: [
      "Must be 18 years or older",
      "No previous experience needed",
      "Physically able to perform tasks (CPR)",
      "Good English comprehension"
    ]
  },
  "security-guard": {
    id: "security-guard",
    title: "Security Guard Training",
    subtitle: "SIA Security Guard Licence Course",
    heroImage: securityImg,
    price: "£175.00",
    duration: "4 days",
    rating: "4.8",
    reviews: "11,000",
    booked: "6,200",
    level: "Level 2 Award for Security Officers",
    highlights: ["SIA Licensed Training", "Patrol & Access Control", "Reporting Skills", "SIA Approved"],
    about: "The SIA Security Guard course is ideal for those looking to work in static guarding, corporate security, and retail. Unlike Door Supervision, this licence does not allow you to work in venues that serve alcohol, making it a great choice for professional corporate environments.",
    learn: [
      "Roles and responsibilities of security guards",
      "Access control and patrolling",
      "Communication and customer service",
      "Conflict management for guards",
      "Legal aspects and private security",
      "Health and safety for security",
      "Emergency procedures",
      "Incident reporting and note taking"
    ],
    whoFor: [
      "Corporate security aspirants",
      "Retail security staff",
      "Concierge and front-of-house staff",
      "Warehouse and site security"
    ],
    requirements: [
      "Must be 18 years or older",
      "Right to work in the UK",
      "Basic English proficiency",
      "No prior experience needed"
    ]
  }
};
