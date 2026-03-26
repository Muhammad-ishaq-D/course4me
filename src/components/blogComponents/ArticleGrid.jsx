import React from "react";
import ArticleCard from "./ArticleCard";
import Blog2 from "../../assets/home/blog2.png";
import Blog3 from "../../assets/home/blog3.png";
import Blog4 from "../../assets/home/blog4.png";
import Blog5 from "../../assets/home/blog5.png";
import Blog6 from "../../assets/home/blog6.png";

const articles = [
  {
    image: Blog2,
    category: "Industry News",
    title: "SIA Licence Changes 2026: What You Need to Know",
    excerpt: "The Security Industry Authority has announced important updates to licensing requirements, from training modules to renewals and background checks.",
    author: "Emma Whitfield",
    date: "Feb 22, 2026",
    readTime: "5 min read",
  },
  {
    image: Blog3,
    category: "Industry News",
    title: "CCTV Operator Demand Surges Across Major UK Cities",
    excerpt: "New data reveals a 35% increase in demand for qualified CCTV Operators as businesses invest more in surveillance and smart city technology.",
    author: "David Clarkson",
    date: "Feb 15, 2026",
    readTime: "4 min read",
  },
  {
    image: Blog4,
    category: "Study Tips",
    title: "5 Tips to Pass Your SIA Exam on the First Attempt",
    excerpt: "Our top instructors share proven study techniques, mental preparation, and insider tips that have helped thousands of students succeed.",
    author: "John Redfern",
    date: "Feb 10, 2026",
    readTime: "6 min read",
  },
  {
    image: Blog5,
    category: "Career Guide",
    title: "Security Career Salaries in 2026: What to Expect",
    excerpt: "A detailed breakdown of average pay across security roles, from door supervision to close protection, and how to negotiate for better rates.",
    author: "Marcus Thompson",
    date: "Feb 3, 2026",
    readTime: "7 min read",
  },
  {
    image: Blog6,
    category: "Company News",
    title: "Get Licensed Opens 10 New Training Centres Across the UK",
    excerpt: "Expanding our reach to serve more aspiring security professionals, with new locations in Manchester, Birmingham, Leeds, and beyond.",
    author: "Get Licensed Team",
    date: "Jan 26, 2026",
    readTime: "3 min read",
  },
];

const ArticleGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 mb-20">
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
        Showing 6 of 12 articles
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
