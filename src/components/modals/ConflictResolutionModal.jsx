import React from "react";
import { AlertCircle, X } from "lucide-react";

const ConflictResolutionModal = ({
  isOpen,
  onClose,
  onReplace,
  conflictCourseTitle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl transform transition-all">
        {/* Header */}
        <div className="relative bg-red-50 p-6 flex flex-col items-center border-b border-red-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors bg-white rounded-full p-1 shadow-sm"
          >
            <X size={20} />
          </button>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border-2 border-red-100">
            <AlertCircle size={32} className="text-red-500" />
          </div>
          <h3 className="text-xl font-black text-gray-900 text-center">
            Schedule Conflict
          </h3>
        </div>

        {/* Body */}
        <div className="p-6 text-center">
          <p className="text-gray-600 font-medium mb-2">
            This date clashes with your existing booking:
          </p>
          <p className="text-[#1C1C1C] font-black text-lg mb-6 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100">
            {conflictCourseTitle || "Another Course"}
          </p>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Do you want to replace the existing selection with this new course,
            or keep your original booking?
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
            >
              Keep Original
            </button>
            <button
              onClick={onReplace}
              className="flex-1 py-3 px-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all cursor-pointer"
            >
              Replace Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConflictResolutionModal;
