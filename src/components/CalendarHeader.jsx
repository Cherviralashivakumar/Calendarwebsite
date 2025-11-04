import React from "react";

export default function CalendarHeader({ currentMonth, onPrev, onNext, onToday }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ◀
        </button>

        <button
          onClick={onToday}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Today
        </button>

        <button
          onClick={onNext}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
      <h2 className="text-2xl font-semibold mr-20"> 
  {currentMonth.format("MMMM YYYY")}
</h2>

      <div className="w-20"></div>
    </div>
  );
}
