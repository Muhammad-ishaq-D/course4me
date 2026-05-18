export const locationsData = [
  {
    id: 1,
    location: "Cardiff, UK",
    centers: [
      {
        id: 101,
        name: "Cardiff Skills Academy",
        postcode: "CF10 2GE",
        address: "14 Queen Street, Cardiff, CF10 2GE",
        hours: "Mon-Sat: 8:00 AM - 6:00 PM",
        next: "Tomorrow",
        courses: [
          {
            id: 1001,
            title: "Door Supervisor",
            description:
              "Professional SIA Door Supervisor training course with practical security skills and certification preparation.",
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            price: 399,
            date: "15 May 2026",
            category: "Security",
            duration: "6 Days",
            badge: "Popular",
            isPopular: true,
            isOnline: false,
          },
          {
            id: 1002,
            title: "Security Guard",
            description:
              "Industry-recognized Security Guard course designed for modern security professionals.",
            image:
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
            price: 299,
            date: "22 May 2026",
            category: "Security",
            duration: "4 Days",
            badge: "Certified",
            isPopular: false,
            isOnline: false,
          },
          {
            id: 1003,
            title: "CCTV Training",
            description:
              "Learn surveillance operations, monitoring systems, and CCTV security procedures with certified instructors.",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            price: 349,
            date: "28 May 2026",
            category: "CCTV",
            duration: "3 Days",
            badge: "Best Seller",
            isPopular: true,
            isOnline: true,
          },
          {
            id: 1004,
            title: "First Aid",
            description:
              "Emergency first aid training course covering CPR, workplace safety, and medical emergency response.",
            image:
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
            price: 199,
            date: "2 June 2026",
            category: "Medical",
            duration: "1 Day",
            badge: "Essential",
            isPopular: false,
            isOnline: false,
          },
        ],
        facilities: [
          "WiFi Access",
          "Disabled Access",
          "Parking",
          "Refreshments",
        ],
        phone: "029 2345 6789",
        email: "cardiff@courses4me.co.uk",
        rating: 4.8,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
    ],
  },

  {
    id: 2,
    location: "London, UK",
    centers: [
      {
        id: 201,
        name: "London Security Institute",
        postcode: "EC1A 1BB",
        address: "120 Oxford Street, London, EC1A 1BB",
        hours: "Mon-Sun: 8:00 AM - 8:00 PM",
        next: "Tomorrow",
        courses: [
          {
            id: 2001,
            title: "Door Supervisor",
            description:
              "Complete SIA Door Supervisor training with real-world practical sessions and expert guidance.",
            image:
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
            price: 449,
            date: "18 May 2026",
            category: "Security",
            duration: "6 Days",
            badge: "Popular",
            isPopular: true,
            isOnline: false,
          },
          {
            id: 2002,
            title: "Close Protection",
            description:
              "Professional bodyguard and close protection course for high-level security careers.",
            image:
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            price: 799,
            date: "25 May 2026",
            category: "Security",
            duration: "10 Days",
            badge: "Premium",
            isPopular: true,
            isOnline: false,
          },
          {
            id: 2003,
            title: "CCTV Training",
            description:
              "Hands-on CCTV surveillance training with monitoring and incident handling techniques.",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            price: 349,
            date: "30 May 2026",
            category: "CCTV",
            duration: "3 Days",
            badge: "Certified",
            isPopular: false,
            isOnline: true,
          },
        ],
        facilities: ["WiFi Access", "Cafe", "Parking"],
        phone: "020 7890 1234",
        email: "london@courses4me.co.uk",
        rating: 4.9,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      },

      {
        id: 202,
        name: "Tech World London",
        postcode: "W1D 2LT",
        address: "50 Baker Street, London, W1D 2LT",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM",
        next: "Monday",
        courses: [
          {
            id: 2004,
            title: "Cyber Security",
            description:
              "Advanced cybersecurity training covering ethical hacking and network protection.",
            image:
              "https://images.unsplash.com/photo-1516321310764-8d8c0f6f5f6b",
            price: 599,
            date: "5 June 2026",
            category: "IT",
            duration: "8 Days",
            badge: "Trending",
            isPopular: true,
            isOnline: true,
          },
          {
            id: 2005,
            title: "Networking",
            description:
              "Learn networking fundamentals, routers, switches, and infrastructure management.",
            image:
              "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
            price: 399,
            date: "12 June 2026",
            category: "IT",
            duration: "5 Days",
            badge: "Certified",
            isPopular: false,
            isOnline: true,
          },
          {
            id: 2006,
            title: "IT Support",
            description:
              "Practical IT support course focused on troubleshooting systems and user support.",
            image:
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
            price: 299,
            date: "20 June 2026",
            category: "IT",
            duration: "4 Days",
            badge: "Essential",
            isPopular: false,
            isOnline: false,
          },
        ],
        facilities: ["Computer Labs", "WiFi Access", "Refreshments"],
        phone: "020 4567 9876",
        email: "techworld@courses4me.co.uk",
        rating: 4.6,
        reviews: 175,
        image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
      },
    ],
  },

  {
    id: 3,
    location: "Manchester, UK",
    centers: [
      {
        id: 301,
        name: "Manchester Learning Center",
        postcode: "M1 4BT",
        address: "88 Deansgate, Manchester, M1 4BT",
        hours: "Mon-Sat: 8:30 AM - 6:30 PM",
        next: "Tomorrow",
        courses: [
          {
            id: 3001,
            title: "First Aid",
            description:
              "Certified emergency first aid course for workplace and public safety.",
            image:
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
            price: 199,
            date: "10 June 2026",
            category: "Medical",
            duration: "1 Day",
            badge: "Essential",
            isPopular: false,
            isOnline: false,
          },
          {
            id: 3002,
            title: "Fire Marshal",
            description:
              "Professional fire safety and evacuation procedures training course.",
            image:
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
            price: 249,
            date: "15 June 2026",
            category: "Safety",
            duration: "2 Days",
            badge: "Certified",
            isPopular: true,
            isOnline: false,
          },
          {
            id: 3003,
            title: "Door Supervisor",
            description:
              "SIA-approved Door Supervisor training for modern security professionals.",
            image:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            price: 399,
            date: "22 June 2026",
            category: "Security",
            duration: "6 Days",
            badge: "Popular",
            isPopular: true,
            isOnline: false,
          },
        ],
        facilities: ["Disabled Access", "Parking", "WiFi Access"],
        phone: "0161 456 7890",
        email: "manchester@courses4me.co.uk",
        rating: 4.7,
        reviews: 132,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
    ],
  },
];
