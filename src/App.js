import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const activationTime = new Date(currentTime.getTime() - (12 * 60 * 60 + 18 * 60 + 19) * 1000); // 12:18:19 ago
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60); // 8 hours countdown (in seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const formatDateTime = (date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const timeSinceActivation = new Date(currentTime - activationTime);
  const sinceActivation = `${String(timeSinceActivation.getUTCHours()).padStart(2, '0')}:${String(timeSinceActivation.getUTCMinutes()).padStart(2, '0')}:${String(timeSinceActivation.getUTCSeconds()).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-[#4d472e] flex flex-col items-center justify-center text-white font-sans">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-white text-black w-full max-w-md rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#4d472e] text-white text-center py-4">
        <div className="w-full overflow-hidden whitespace-nowrap  py-2 text-white">
        <motion.div
          className="flex  w-max gap-12 text-2xl font-bold tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <span>GO TRANSIT &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;•&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span>GO TRANSIT &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;•&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</span>
        </motion.div>
      </div>
          <div className="text-sm">Main St. S. @ Elgin Dr. to University of Guelph - Weekend Pass</div>
        </div>
        <div className="p-4 flex justify-around text-center border-b">
          <div>
            <div className="text-2xl font-bold">x1</div>
            <div className="text-sm">Passenger(s)</div>
            <div className="text-xs">1x Weekend Pass</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21h4.5m2.25 0H18a2.25 2.25 0 002.25-2.25v-11.7c0-.966-.57-1.846-1.443-2.194A48.419 48.419 0 0012 3a48.419 48.419 0 00-6.807 1.856A2.25 2.25 0 003.75 7.05v11.7A2.25 2.25 0 006 21h1.5" />
            </svg>
            <div className="text-sm mt-2">Multi Use Pass</div>
          </div>
        </div>
        <div className="px-4 py-2 text-sm">
          <div className="mb-2">Ticket Number: <strong>MZ63792656</strong></div>
          <div className="bg-gray-300 h-16 mb-2" /> {/* Placeholder for barcode */}
          <div className="flex justify-between text-xs">
            <div>
              <div className="font-bold">CURRENT DATE & TIME:</div>
              <div>{formatDateTime(currentTime)}</div>
            </div>
            <div>
              <div className="font-bold">TIME SINCE ACTIVATION:</div>
              <div>{sinceActivation}</div>
            </div>
          </div>
        </div>
        <div className="bg-[#4d472e] text-white text-center p-4">
          <div className="text-sm mb-2">Please show proof of your ticket to the Customer Protective Officers when asked</div>
          <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
