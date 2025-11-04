import React from "react";
import dayjs from "dayjs";
import EventCard from "./EventCard";

export default function CalendarGrid({ currentMonth, events }) {
  const startOfMonth = currentMonth.startOf("month");
//   const endOfMonth = currentMonth.endOf("month");
  const startDay = startOfMonth.day(); 
  const daysInMonth = currentMonth.daysInMonth();
  const today = dayjs().format("YYYY-MM-DD");

  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7; 
  const days = [];

  for (let i = 0; i < totalCells; i++) {
    const dayNumber = i - startDay + 1;
    const date = currentMonth.date(dayNumber).format("YYYY-MM-DD");
    const dayEvents = events.filter((ev) => ev.date === date);

    days.push({ dayNumber, date, dayEvents });
  }

  return (
    <div className="grid grid-cols-7 gap-2 text-center border-t border-l border-gray-200">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div
          key={d}
          className="font-semibold text-gray-600 py-2 bg-gray-50 border-r border-b border-gray-200"
        >
          {d}
        </div>
      ))}

      {days.map(({ dayNumber, date, dayEvents }, index) => (
        <div
          key={index}
          className={`calendar-day border-r border-b border-gray-200 p-2 h-32 text-left relative rounded-md ${
            date === today ? "bg-yellow-100 border-yellow-400" : "bg-white"
          }`}
        >
          {dayNumber > 0 && dayNumber <= daysInMonth ? (
            <>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {dayNumber}
              </div>

              <div className="space-y-1 overflow-y-auto max-h-[80px]">
                {dayEvents.map((ev, idx) => (
                  <EventCard key={idx} event={ev} />
                ))}
              </div>
            </>
          ) : (
            <div className="opacity-0">X</div>
          )}
        </div>
      ))}
    </div>
  );
}
