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
    <div className="min-h-screen bg-[#4d472e] flex flex-col items-center justify-center text-white font-sans border-none">
      {/* <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className=" text-black w-full max-w-md border-none overflow-hidden"> */}
      <motion.div
  initial={{ backgroundColor: "#4d472e" }}
  animate={{ backgroundColor: "#1e1a0f" }} // darker color
  transition={{ duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
   }}
  className="min-h-screen flex flex-col items-center justify-center text-black font-sans border-none w-full max-w-md border-none overflow-hidden"
>
        <div className=" text-white text-center py-4">
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
        <div className=" py-1 border-none"></div>
        <div className="w-full p-4 flex justify-around text-center border-b-[3px] border-dotted border-gray-400 bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold">x1</div>
            <div className="text-xl font-bold">Passenger(s)</div>
            <div className="text-xm mt-2">1x Weekend Pass</div>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 128" width="64" height="128">

  <line x1="32" y1="0" x2="32" y2="120" stroke="#cccccc" stroke-width="2"/>

  <g transform="translate(16, 32)">
    <rect x="0" y="4" width="28" height="32" rx="8" ry="8" fill="#bfbfbf"/>

    <rect x="3" y="10" width="9" height="9" fill="white"/>
    <rect x="16" y="10" width="9" height="9" fill="white"/>

    <circle cx="7" cy="28" r="2.5" fill="white"/>
    <circle cx="22" cy="28" r="2.5" fill="white"/>

    <path d="M8 30 L22 30 L27 40 L4 40 Z" fill="#bfbfbf"/>
  </g>
</svg>

          </div>
          {/* <div><img src='./train logo.png' sizes='max-height:25px'></img></div> */}
          <div className="flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g transform="rotate(-20 32 32)">
  
    <rect x="12" y="20" width="40" height="24" rx="4" ry="4" fill="none" stroke="#333" stroke-width="4"/>
 
    <line x1="36" y1="20" x2="36" y2="44" stroke="#333" stroke-width="4"/>
  </g>
</svg>

            <div className="text-xl mt-0 font-bold">Multi Use Pass</div>
          </div>
        </div>
        <div className="w-full px-4 py-2 text-sm text-center bg-white">
          <div className="mb-2 text-lg">Ticket Number: <strong>MZ63792656</strong></div>
          <div className="bg-gray-300 h-16 mb-2" /> {/* Placeholder for barcode */}
          <div className="flex justify-between text-xs">
            <div className='text-center'>
              <div className="font-bold text-[11px]">CURRENT DATE & TIME:</div>
              <div className='font-bold text-[15px]'>{formatDateTime(currentTime)}</div>
            </div>
            <div>
              <div className="font-bold text-[11px]">TIME SINCE ACTIVATION:</div>
              <div className='font-bold text-[15px]'>{sinceActivation}</div>
            </div>
          </div>
        </div>
        <div className="bg-[#4d472e] py-1 border-none"></div>
        <div className=" text-white text-center p-4">
          <div className="text-[18px] mb-2 mx-4 mt-8">Please show proof of your ticket to the Customer Protective Officers when asked</div>
          <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
