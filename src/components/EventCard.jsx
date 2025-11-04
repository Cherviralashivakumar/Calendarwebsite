import React from "react";

export default function EventCard({ event }) {
  return (
    <div
      className="rounded text-xs text-white px-2 py-1 truncate"
      style={{ backgroundColor: event.color }}
      title={`${event.title} (${event.startTime} - ${event.endTime})`}
    >
      {event.title}
    </div>
  );
}
