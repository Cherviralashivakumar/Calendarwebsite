import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar({ events }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handlePrev = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNext = () => setCurrentMonth(currentMonth.add(1, "month"));
  const handleToday = () => setCurrentMonth(dayjs());

  return (
    <div>
      <CalendarHeader
        currentMonth={currentMonth}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
      />
      <CalendarGrid currentMonth={currentMonth} events={events} />
    </div>
  );
}
