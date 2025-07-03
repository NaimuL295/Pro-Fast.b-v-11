import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { GiRaceCar } from "react-icons/gi";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white to-lime-50 z-50">
      {/* Logo / Brand */}
      <h1 className="text-4xl font-extrabold text-lime-500 mb-8 tracking-wide drop-shadow-sm">
        🚚📦 ParcelSwift
      </h1>

      {/* Truck + Sports Car Row */}
      <div className="flex items-center gap-16">
        
        <GiRaceCar className="text-lime-600 text-[110px] animate-[zoom_0.7s_ease-in-out_infinite] drop-shadow-xl" />
      </div>

      {/* Loading Text */}
      <p className="mt-8 text-xl md:text-2xl text-gray-600 font-medium">
        Delivering your experience at top speed...
      </p>

      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }
          @keyframes zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1) translateX(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
