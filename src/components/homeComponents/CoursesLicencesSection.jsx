import React from "react";

// Course item component
const CourseItem = ({ title, description }) => (
  <div className="border-b border-gray-200 py-4 last:border-0">
    <h4 className="font-bold text-gray-900">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

// Licence item component
const LicenceItem = ({ title }) => (
  <div className="border-b border-gray-200 py-3 last:border-0">
    <h4 className="font-bold text-gray-900">{title}</h4>
  </div>
);

const CoursesLicencesSection = () => {
  return (
    <section className="bg-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* POPULAR COURSES - Top left badge */}
        <div className="mb-8">
          <span className="bg-blue-900 text-white text-sm font-semibold px-5 py-2 rounded-full tracking-wider">
            POPULAR COURSES
          </span>
        </div>

        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN - Courses list */}
          <div className="space-y-1">
            <CourseItem 
              title="Door Supervisor Training"
              description="Essential training for nightclub and venue security"
            />
            <CourseItem 
              title="CCTV Operator Training"
              description="Learn professional surveillance techniques"
            />
            <CourseItem 
              title="First Aid at Work"
              description="Comprehensive emergency response training"
            />
            <CourseItem 
              title="Security Guard Training"
              description="Foundation course for security professionals"
            />
            <CourseItem 
              title="Close Protection"
              description="Elite bodyguard and protection training"
            />
            <CourseItem 
              title="Conflict Management"
              description="De-escalation and conflict resolution"
            />
            
            {/* ALL COURSES link */}
            <div className="mt-6">
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                ALL COURSES <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Licences */}
          <div>
            {/* POPULAR LICENCES badge */}
            <div className="mb-8">
              <span className="bg-blue-900 text-white text-sm font-semibold px-5 py-2 rounded-full tracking-wider">
                POPULAR LICENCES
              </span>
            </div>

            {/* ALL LICENCES link (above the list) */}
            <div className="mb-4 text-right">
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                ALL LICENCES <span className="ml-2 text-xl">→</span>
              </a>
            </div>

            {/* Licences list */}
            <div className="space-y-1 border-t border-gray-200 pt-4">
              <LicenceItem title="SIA Top-Up Training" />
              <LicenceItem title="Door Supervisor Licence" />
              <LicenceItem title="CCTV Licence" />
              <LicenceItem title="Security Guard Licence" />
              <LicenceItem title="Close Protection Licence" />
            </div>

            {/* Optional: Add a subtle note about renewals */}
            <p className="text-xs text-gray-400 mt-6">
              All licences are SIA approved and nationally recognised
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesLicencesSection;