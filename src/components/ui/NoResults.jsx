import React from "react";
import { SearchX } from "lucide-react";

const NoResults = () => {
  return (
    <div className="mt-16 bg-white rounded-[32px] border border-gray-100 py-24 px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-red-50 mx-auto flex items-center justify-center text-red-500">
        <SearchX size={42} />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-900">
        No Results Found
      </h2>

      <p className="mt-4 text-gray-500 max-w-xl mx-auto">
        We couldn't find anything matching your search.
      </p>
    </div>
  );
};

export default NoResults;
