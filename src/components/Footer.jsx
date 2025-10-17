import React from "react";
import hanuman from "../assets/punrasar.jpeg";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
          {/* Brand + about */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-2xl font-extrabold mb-2">
              <img src={hanuman} className="w-12 h-12 rounded-full" />
              <span>
                Bal Ke Laal Mitra Mandal</span>
            </div>
            <div className="mb-5 text-base">
              समाज के कल्याण के लिए समर्पित एक सामाजिक संगठन जो हनुमान जी की कृपा से कार्य करता है।
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/bal_ke_lal_mitar_mandal?igsh=MTA2NnF4NDc2cndnZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-3 rounded-full inline-block"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <div className="font-bold mb-2 border-l-4 border-red-500 pl-2 text-lg">त्वरित लिंक</div>
            <ul className="space-y-1">
              <li><a className="hover:text-gray-300" href="#about">परिचय</a></li>
              <li><a className="hover:text-gray-300" href="#member">हमारे सदस्य</a></li>
              <li><a className="hover:text-gray-300" href="#donate">योगदान करें</a></li>
              <li><a className="hover:text-gray-300" href="#contact">संपर्क करें</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="flex-1">
            <div className="font-bold mb-2 border-l-4 border-red-500 pl-2 text-lg">संपर्क सूचना</div>
            <ul className="text-whitespace-y-1">
              <li>📍 Sale ki holi kela colony jhawro ka chowk Bikaner,Rajasthan</li>
              <li>📞 +91 6375257935</li>
              <li>✉️ acharyayogesh085@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom info and dev credit */}
        <div className="flex flex-col items-center text-center text-whitetext-sm gap-2">
          <div className="flex flex-col w-full mt-2 items-center gap-3">
            <div className="flex-1 font-bold">&copy; 2025 Bal Ke Laal Mitra Mandal.</div>
            <div>
            <b>मिशन:</b> समाज के कल्याण के लिए समर्पित सेवा
          </div>

            {/* Developer credit */}
            <div className="flex items-center space-x-2">
              <span className="font-bold">Developed by JaikishanS Kularia</span>
              <a href="https://github.com/jksuthar0303" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="GitHub">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="https://www.instagram.com/jaikishan__kularia" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jaikishans-kularia-368712212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="w-full text-center mt-2 text-lg text-white">
            <span>🙏 जय श्री पूनरासर बाबा 🙏</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
