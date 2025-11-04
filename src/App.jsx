import React from "react";
import Calendar from "./components/Calendar";
import events from "./data/events.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-6 ml-20">
        <h1 className="text-3xl font-bold mb-6 text-center ">
  Event Calendar
</h1>
        <Calendar events={events} />
      </div>
    </div>
  );
}
