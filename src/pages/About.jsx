import React from "react";
import image from "../assets/3.jpeg";

export default function About() {
  return (
    <div className="h-full lg:h-[500px] bg-white flex flex-col justify-start lg:justify-center items-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            हमारे बारे में
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bal Ke Laal Mitra Mandal एक सामाजिक संगठन है जो समाज के कमजोर और वंचित वर्ग की सेवा करने के लिए समर्पित है।
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            हमारा मुख्य लक्ष्य गरीब घरों की लड़कियों को सम्मान के साथ विवाह के लिए आर्थिक सहायता प्रदान करना और हर रविवार को गरीब बच्चों को पौष्टिक केसर दूध वितरित करना है।
          </p>
          <p className="text-gray-700 leading-relaxed">
            हम विश्वास करते हैं कि समाज की सेवा ही सच्ची भक्ति है और हर बच्चे का भविष्य हमारी जिम्मेदारी है।
          </p>
        </div>
        <div className="items-center justify-center">
          <div className="w-full h-52 relative rounded-xl overflow-hidden shadow-lg flex items-end px-4">
            {/* Background image */}
            <img
              src={image}
              alt="समाज सेवा"
              className="absolute inset-0 w-full h-full contain-content"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
