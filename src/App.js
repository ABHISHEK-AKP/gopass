import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const activationTime = new Date(
    currentTime.getTime() - (12 * 60 * 60 + 18 * 60 + 19) * 1000
  ); // 12:18:19 ago
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60); // 8 hours countdown (in seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const formatDateTime = (date) => {
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const timeSinceActivation = new Date(currentTime - activationTime);
  const sinceActivation = `${String(timeSinceActivation.getUTCHours()).padStart(
    2,
    "0"
  )}:${String(timeSinceActivation.getUTCMinutes()).padStart(2, "0")}:${String(
    timeSinceActivation.getUTCSeconds()
  ).padStart(2, "0")}`;

  return (
    <div className=" min-h-screen bg-[#7e7739] flex flex-col items-center justify-center text-white font-sans border-none">
      {/* <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className=" text-black w-full max-w-md border-none overflow-hidden"> */}
      <motion.div
        initial={{ backgroundColor: "#7e7739" }}
        animate={{ backgroundColor: "#1e1a0f" }} // darker color
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="min-h-screen flex flex-col items-center justify-center text-black font-sans border-none w-full max-w-md border-none overflow-hidden"
      >
        <div className="max-w-full text-white text-center py-4 relative z-10">
          <div   className="absolute left-1/2 -translate-x-1/2"
  style={{
    width: 60,
    
     // optional rounded corners for the container
    top: -60, // adjust as needed

  }}>
                      <svg
            width="140"
            height="80"
            viewBox="0 0 120 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <rect width="120" height="60" /> */}

            <path d="M14,15 A14,15 0 0 0 14,45 L14,15 Z" fill="white" />

            <path d="M17,15 A13,15 0 0 1 30,28 L17,28 Z" fill="white" />

            <rect x="17" y="32" width="13" height="13" fill="white" />

            <path d="M33,28 A15,15 0 0 1 63,28 L33,28 Z" fill="white" />

            <path d="M63,32 A15,15 0 0 1 33,32 L63,32 Z" fill="white" />
          </svg>
          </div>

          <div className="w-full overflow-hidden whitespace-nowrap  py-2 text-white">
            <motion.div
              className="flex  w-max gap-12 text-2xl font-bold tracking-wider"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <span>
                GO TRANSIT &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;•&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              </span>
              <span>
                GO TRANSIT &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;•&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              </span>
            </motion.div>
          </div>
          <div className="text-[14px] min-w-full  mb-4">
            Main St. S. @ Elgin Dr. to University of Guelph - Weekend Pass
          </div>
        </div>
        <div className="w-full py-1 border-none relative z-10 bg-[#7e7739]"></div>
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: 24, // adjust size as needed
            height: 24,
            borderRadius: "50%",
            border: "2px solid white",
            backgroundColor: "#7e7739", // background same as parent or transparent
            top: "calc(25% + 20px)", // position relative to upper div bottom (adjust as needed)
            zIndex: 20,
          }}
        ></div>
        <div className="w-full p-4 flex justify-around text-center border-b-[3px] border-dotted border-gray-400 bg-white relative z-10">
          <div className="mx-2 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold">x1</div>
            <div className="text-xl font-bold">Passenger(s)</div>
            <div className="text-xm mt-2">1x Weekend Pass</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 128"
              width="64"
              height="128"
            >
              <line
                x1="32"
                y1="0"
                x2="32"
                y2="120"
                stroke="#cccccc"
                stroke-width="2"
              />

              <g transform="translate(16, 32)">
                <rect
                  x="0"
                  y="4"
                  width="28"
                  height="32"
                  rx="8"
                  ry="8"
                  fill="#bfbfbf"
                />

                <rect x="3" y="10" width="9" height="9" fill="white" />
                <rect x="16" y="10" width="9" height="9" fill="white" />

                <circle cx="7" cy="28" r="2.5" fill="white" />
                <circle cx="22" cy="28" r="2.5" fill="white" />

                <path d="M8 30 L22 30 L27 40 L4 40 Z" fill="#bfbfbf" />
              </g>
            </svg>
          </div>
          {/* <div><img src='./train logo.png' sizes='max-height:25px'></img></div> */}
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <g transform="rotate(-20 32 32)">
                <rect
                  x="12"
                  y="20"
                  width="40"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="none"
                  stroke="#333"
                  stroke-width="4"
                />

                <line
                  x1="36"
                  y1="20"
                  x2="36"
                  y2="44"
                  stroke="#333"
                  stroke-width="4"
                />
              </g>
            </svg>

            <div className="text-xl mt-0 font-bold">Multi Use Pass</div>
          </div>
        </div>
        <div className="w-full px-4 py-2 text-sm text-center bg-white">
          <div className="mb-2 text-lg">
            Ticket Number: <strong>MZ63792656</strong>
          </div>
          <div className="relative w-full h-16 bg-white overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex space-x-1 px-2">
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-1.5 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-0.5 h-full"></div>
              <div className="bg-gray-400 w-1 h-full"></div>
              <div className="bg-gray-400 w-2 h-full"></div>
            </div>

            <div className="relative bg-white px-4 py-1 z-10">
              <motion.span
                className="text-2xl font-medium tracking-wide"
                animate={{ color: ["#7e7739", "#ffffff", "#7e7739"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                ACTIVE
              </motion.span>
              {/* <span className="text-[#6f6c3d] text-2xl font-medium tracking-wide">ACTIVE</span> */}
            </div>
          </div>
          <div className="flex justify-between text-xs">
            <div className="text-center">
              <div className="font-bold text-[11px]">CURRENT DATE & TIME:</div>
              <div className="font-bold text-[15px]">
                {formatDateTime(currentTime)}
              </div>
            </div>
            <div>
              <div className="font-bold text-[11px]">
                TIME SINCE ACTIVATION:
              </div>
              <div className="font-bold text-[15px]">{sinceActivation}</div>
            </div>
          </div>
        </div>
        <div className="bg-[#7e7739] py-1 border-none w-full"></div>
        <div className=" text-white text-center p-4">
          <div className="text-[18px] mb-2 mx-4 mt-8">
            Please show proof of your ticket to the Customer Protective Officers
            when asked
          </div>
          <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
