import React from "react";
import hanuman from "../assets/punrasar.jpeg"; 

const Hanuman = () => {
  return (
    <div className="h-full flex items-center justify-center px-4 mt-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={hanuman}
            alt="hanuman"
            className="rounded-2xl shadow-lg w-[400px] h-[340px] object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <span className="bg-orange-500 text-white text-sm font-semibold px-5 py-1 rounded-full mb-3">
            हमारी आस्था और प्रेरणा
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
          पूनरासर हनुमान जी की कृपा
          </h2>
          <p className="text-gray-700 mb-2 text-lg">
          हमारे संगठन का सारा काम पूनरासर हनुमान जी के आशीर्वाद और कृपा से ही संभव हो रहा है। पूनरासर हनुमान जी हमें निरंतर समाज सेवा के मार्ग पर चलने की शक्ति और साहस देते हैं।
          </p>
          <p className="text-gray-700 mb-2">
            "जय हनुमान ज्ञान गुण सागर, जय कपीश तिहुँ लोक उजागर"
          </p>
          <p className="text-gray-700 mb-6">
          पूनरासर हनुमान जी की कृपा से ही हम समाज की सेवा में अपना सारा जीवन लगा दें। जय बाबे री 🙏
          </p>
          <div className="flex text-4xl gap-6">
            <span role="img" aria-label="prayer">🙏</span>
            <span role="img" aria-label="love">❤️</span>
            <span role="img" aria-label="stars">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hanuman;
