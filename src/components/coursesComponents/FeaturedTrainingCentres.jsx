import React from 'react';
import TrainingCentreCard from './TrainingCentreCard';
import LONDON_IMG from '../../assets/courses/London.png';
import MANCHESTER_IMG from '../../assets/courses/Manchester.png';
import BIRMINGHAM_IMG from '../../assets/courses/Birmingham.png';
import GLASGOW_IMG from '../../assets/courses/Glasgow.png';
import star from '../../assets/courses/star.svg';


const centresData = [
  {
    image: LONDON_IMG,
    city: "London",
    subtitle: "London Central Training Centre",
    rating: "4.9",
    address: "123 Oxford Street, London, W1D 2HG",
    timing: "Mon-Sun: 8:00 AM - 8:00 PM",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    extraCoursesCount: 2
  },
  {
    image: MANCHESTER_IMG,
    city: "Manchester",
    subtitle: "Manchester Training Hub",
    rating: "4.8",
    address: "45 Deansgate, Manchester, M3 2AY",
    timing: "Mon-Sat: 8:00 AM - 7:00 PM",
    nextAvailable: "Today",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    extraCoursesCount: 1
  },
  {
    image: BIRMINGHAM_IMG,
    city: "Birmingham",
    subtitle: "Birmingham Academy",
    rating: "4.9",
    address: "78 Broad Street, Birmingham, B1 2HP",
    timing: "Mon-Sun: 7:30 AM - 8:00 PM",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    extraCoursesCount: 3
  },
  {
    image: GLASGOW_IMG,
    city: "Glasgow",
    subtitle: "Glasgow Training Centre",
    rating: "4.9",
    address: "89 Sauchiehall Street, Glasgow, G2 3DE",
    timing: "Mon-Sun: 8:00 AM - 8:00 PM",
    nextAvailable: "Today",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard", "CCTV Operator"],
    extraCoursesCount: 2
  }
];

const CustomSparkleIcon = () => (
  <img src={star} alt="star" className='w-9' />
);

export default function FeaturedTrainingCentres() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 w-full font-sans bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <CustomSparkleIcon />
          <h2 className="text-[32px] md:text-[40px] font-black text-[#18181B] tracking-tight leading-none pt-1">
            Featured Training Centres
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {centresData.map((centre, index) => (
            <TrainingCentreCard key={index} {...centre} />
          ))}
        </div>
      </div>
    </section>
  );
}
