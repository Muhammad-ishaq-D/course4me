export const searchData = [
  // ============================= COURSES =============================

  {
    id: 1,
    type: "course",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    title: "Door Supervisor",
    description:
      "Professional SIA door supervisor training for security careers and safety management.",

    badge: "Popular",

    price: 100,

    date: "17 May 2026",

    category: "SIA Training",

    duration: "4 Days",

    isPopular: true,

    isOnline: false,

    location: "London",
  },

  {
    id: 2,
    type: "course",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

    title: "Cyber Security Bootcamp",

    description:
      "Learn ethical hacking and cybersecurity from industry experts with practical labs.",

    badge: "Trending",

    price: 250,

    date: "25 May 2026",

    category: "Cyber Security",

    duration: "6 Weeks",

    isPopular: true,

    isOnline: false,

    location: "Manchester",
  },

  {
    id: 3,
    type: "course",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

    title: "Project Management Course",

    description:
      "Master agile project management and leadership skills for modern businesses.",

    badge: "Top Rated",

    price: 180,

    date: "10 June 2026",

    category: "Management",

    duration: "8 Weeks",

    isPopular: false,

    isOnline: false,

    location: "Liverpool",
  },

  // ============================= LICENSES =============================

  {
    _id: "licence-1",

    type: "license",

    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",

    title: "Security Guard Licence",

    subtitle: "Manned Guarding",

    shortDescription:
      "Protect businesses and offices with patrol and access control duties.",

    description:
      "Professional security guard licence for commercial and corporate security services.",

    duration: "4 Days Training",

    valid: "3 Years",

    salary: "£9-13/hr",

    pricing: {
      basePrice: 165,
      salePrice: 140,
    },

    isPopular: true,

    location: "Birmingham",
  },

  {
    _id: "licence-2",

    type: "license",

    thumbnail:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",

    title: "First Aid Certification",

    subtitle: "Healthcare",

    shortDescription:
      "Essential emergency first aid certification for professionals.",

    description:
      "Learn CPR, emergency response and medical support techniques.",

    duration: "2 Days Training",

    valid: "2 Years",

    salary: "Certified",

    pricing: {
      basePrice: 80,
      salePrice: 65,
    },

    isPopular: false,

    location: "London",
  },

  {
    _id: "licence-3",

    type: "license",

    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",

    title: "CSCS Green Card",

    subtitle: "Construction",

    shortDescription: "Construction site safety certification for workers.",

    description:
      "Mandatory construction safety certification for UK site workers.",

    duration: "1 Day Training",

    valid: "5 Years",

    salary: "Required",

    pricing: {
      basePrice: 120,
      salePrice: 99,
    },

    isPopular: true,

    location: "Manchester",
  },

  // ============================= CAREERS =============================

  {
    id: 101,

    type: "career",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    title: "Door Supervisor",

    category: "SIA Training",

    salary: "£24K — £32K / year",

    level: "Entry Level",

    licence: "SIA Licence",

    description: "Ensure safety and security in commercial environments.",

    popular: true,

    location: "London",
  },

  {
    id: 102,

    type: "career",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    title: "Cyber Security Engineer",

    category: "Technology",

    salary: "£45K — £70K / year",

    level: "Mid Level",

    licence: "Security Certification",

    description: "Protect enterprise systems from cyber attacks and threats.",

    popular: true,

    location: "Toronto",
  },

  {
    id: 103,

    type: "career",

    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",

    title: "Healthcare Assistant",

    category: "Healthcare",

    salary: "£20K — £28K / year",

    level: "Beginner",

    licence: "Healthcare Certificate",

    description: "Support healthcare professionals and patient care services.",

    popular: false,

    location: "Liverpool",
  },

  // ============================= LOCATIONS =============================

  {
    id: 201,

    type: "location",

    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",

    title: "London Training Center",

    description:
      "Explore professional courses, licences and careers in London.",

    location: "London",

    totalCourses: "320+ Courses",

    totalLicences: "120+ Licences",

    totalCareers: "540+ Careers",

    featured: true,
  },

  {
    id: 202,

    type: "location",

    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200&auto=format&fit=crop",

    title: "New York Learning Hub",

    description: "Discover world-class education and career opportunities.",

    location: "New York",

    totalCourses: "280+ Courses",

    totalLicences: "90+ Licences",

    totalCareers: "430+ Careers",

    featured: true,
  },

  {
    id: 203,

    type: "location",

    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop",

    title: "Toronto Career Institute",

    description: "Career-focused education and licensing opportunities.",

    location: "Toronto",

    totalCourses: "190+ Courses",

    totalLicences: "60+ Licences",

    totalCareers: "310+ Careers",

    featured: false,
  },
];
