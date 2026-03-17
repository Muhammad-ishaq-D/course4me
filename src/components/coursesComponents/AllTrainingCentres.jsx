import React from 'react';
import RegularTrainingCentreCard from './RegularTrainingCentreCard';
import LONDON_IMG from '../../assets/courses/London.png';
import MANCHESTER_IMG from '../../assets/courses/Manchester.png';
import BIRMINGHAM_IMG from '../../assets/courses/Birmingham.png';
import GLASGOW_IMG from '../../assets/courses/Glasgow.png';
import star from '../../assets/courses/star.svg';
import LEEDS_IMG from '../../assets/courses/Leeds.png';
import BRISTOL_IMG from '../../assets/courses/Bristol.png';
import EDINBURGH_IMG from '../../assets/courses/Edinburgh.png';
import LIVERPOOL_IMG from '../../assets/courses/Liverpool.png';
import CARDIFF_IMG from '../../assets/courses/Cardiff.png';

const allCentresData = [
  {
    image: LONDON_IMG,
    city: "London",
    subtitle: "London Central Training Centre",
    rating: "4.9",
    address: "W1D 2HG",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 3
  },
  {
    image: MANCHESTER_IMG,
    city: "Manchester",
    subtitle: "Manchester Training Hub",
    rating: "4.8",
    address: "M3 2AY",
    nextAvailable: "Today",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 2
  },
  {
    image: BIRMINGHAM_IMG,
    city: "Birmingham",
    subtitle: "Birmingham Academy",
    rating: "4.9",
    address: "B1 2HP",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 4
  },
  {
    image: LEEDS_IMG,
    city: "Leeds",
    subtitle: "Leeds Training Centre",
    rating: "4.7",
    address: "LS1 2AG",
    nextAvailable: "3 days",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 2
  },
  {
    image: BRISTOL_IMG,
    city: "Bristol",
    subtitle: "Bristol Training Academy",
    rating: "4.8",
    address: "BS8 3JA",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 1
  },
  {
    image: GLASGOW_IMG,
    city: "Glasgow",
    subtitle: "Glasgow Training Centre",
    rating: "4.9",
    address: "G2 3DE",
    nextAvailable: "Today",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 3
  },
  {
    image: EDINBURGH_IMG,
    city: "Edinburgh",
    subtitle: "Edinburgh Academy",
    rating: "4.8",
    address: "EH2 2AN",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 2
  },
  {
    image: LIVERPOOL_IMG,
    city: "Liverpool",
    subtitle: "Liverpool Training Hub",
    rating: "4.7",
    address: "L1 4HY",
    nextAvailable: "2 days",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 1
  },
  {
    image: CARDIFF_IMG,
    city: "Cardiff",
    subtitle: "Cardiff Training Centre",
    rating: "4.8",
    address: "CF10 2GE",
    nextAvailable: "Tomorrow",
    nextAvailableColor: "text-[#22C55E]",
    courses: ["Door Supervisor", "Security Guard"],
    extraCoursesCount: 2
  }
];

export default function AllTrainingCentres() {
  return (
    <section className="py-20 px-4 md:px-6 w-full font-sans bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[36px] font-black text-[#18181B] tracking-tight mb-2">
            All Training Centres
          </h2>
          <p className="text-[#71717A] text-[16px] font-medium">
            Showing {allCentresData.length} locations
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {allCentresData.map((centre, index) => (
            <RegularTrainingCentreCard key={index} {...centre} />
          ))}
        </div>
      </div>
    </section>
  );
}
