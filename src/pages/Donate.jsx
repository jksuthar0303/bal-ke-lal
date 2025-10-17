import React from 'react';
import qrImage from '../assets/qr.jpeg'; 

export const Donate = () => {
  return (
    <div className="h-full bg-red-600 flex flex-col items-center justify-start p-6 mt-8">
      <div className="max-w-3xl w-full grid lg:grid-cols-2  justify-center items-center gap-6">
      <div>
      <h2 className="text-3xl font-extrabold text-white mb-6">
          हमारे काम में योगदान करें
        </h2>
        <p className="text-white text-lg mb-2 font-semibold">
          आपका छोटा सा योगदान किसी गरीब लड़की की शादी में सहायता कर सकता है या हजारों बच्चों को पोषक दूध प्रदान कर सकता है।
        </p>
        <p className="text-white text-base mb-8">
          हमारे साथ जुड़िए और समाज सेवा में भागीदार बनिए। आपका दान सीधे जरूरतमंदों तक पहुँचता है।
        </p>
      </div>
        <div className="bg-red-500/50 border border-white rounded-xl p-8">
          <div className="font-bold text-white text-lg mb-2">QR कोड स्कैन करें</div>
          <div className="text-white mb-6 text-sm">
            नीचे दिए गए QR कोड को स्कैन करके सीधे योगदान कर सकते हैं
          </div>
          <div className="flex justify-center">
            <img
              src={qrImage}
              alt="QR Code"
              className="w-56 h-56 object-contain bg-white rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
