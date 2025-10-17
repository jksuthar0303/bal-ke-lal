import React from "react";
import narayan from "../assets/narayan.jpeg";
import kishan from "../assets/kishan.jpeg";
import bhupendra from "../assets/bhupendra.jpeg";
import jagmohan from "../assets/jagmohan.jpeg";
import mohan from "../assets/mohan.jpeg";
import piyush from "../assets/piyush.jpeg";
import yogesh from "../assets/yogesh.jpeg";

const members = [
  {
    name: "नारायण दास पुरोहित",
    role: "संरक्षक",
    img: narayan,
  },
  {
    name: "किशन जी",
    role: "अध्यक्ष",
    img: kishan,
  },
  {
    name: "जगमोहन पुरोहित",
    role: "उपाध्यक्ष",
    img: jagmohan,
  },
  {
    name: "श्री मोहन पुरोहित",
    role: "कोषाध्यक्ष",
    img: mohan,
  },
  {
    name: "भूपेंद्र जोशी",
    role: "सचिव",
    img: bhupendra,
  },
  {
    name: "योगेश आचार्य",
    role: "महासचिव",
    img: yogesh,
  },
  {
    name: "पीयूष पुरोहित",
    role: "मिडिया प्रभारी",
    img: piyush,
  },
];

export default function Members() {
  return (
    <div className="h-full flex flex-col justify-center lg:items-center items-start p-4">
      <h2 className="text-4xl font-bold text-red-500 mt-10 mb-2">हमारे सदस्य</h2>
      <p className="text-lg mb-6 text-gray-700 text-start">
        समर्पित व्यक्तियों की हमारी टीम जो समाज सेवा में काम कर रहे हैं
      </p>

      <div
        className="
          w-full max-w-7xl
          h-96
          flex gap-6 overflow-x-auto snap-x snap-mandatory
          scrollbar-hide
          px-2
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {members.map((m, idx) => (
          <div
            key={idx}
            className="
              min-w-[250px]
              h-[360px]
              bg-white rounded-xl
              flex flex-col items-center
              pb-4
              overflow-hidden
              snap-start
              shadow-lg
              flex-shrink-0
            "
          >
            {m.img ? (
              <img src={m.img} alt={m.name} className=" h-72 w-full object-cover object-top  shadow-lg" loading="lazy" />
            ) : (
              <div className="h-64 w-full bg-gray-200 flex items-center justify-center text-5xl text-gray-400">
                {m.name[0]}
              </div>
            )}
            <div className="px-4 pt-3 text-center">
              <div className="font-bold text-gray-900 text-lg">{m.name}</div>
              <div className="text-orange-600 font-medium text-sm">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
