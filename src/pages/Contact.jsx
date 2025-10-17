import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Send via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3geo28p", // EmailJS Service ID
        "template_pvlxzuo", // EmailJS Template ID
        formData,
        "DVHTD8WvJ3Avb08qU" // EmailJS Public Key
      )
      .then(
        (result) => {
          toast("Email सफलतापूर्वक भेजा गया!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          toast.error("कृपया बाद में फिर कोशिश करें!");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-start lg:items-center p-6 mt-8">
      <Toaster position="top-right" />
      <h2 className="text-4xl font-black text-red-500 mb-2">हमसे संपर्क करें</h2>
      <div className="text-lg mb-10 text-gray-700 max-w-2xl">
        किसी भी सवाल के लिए हमसे संपर्क करने में संकोच न करें
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-white rounded-xl border-t-4 border-red-600 p-7 shadow">
            <div className="font-bold text-xl text-gray-900 mb-4">संदेश भेजें</div>
            <form className="flex flex-col gap-4" onSubmit={sendEmail}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl outline-none focus:border-red-500 p-3 flex-1"
                  placeholder="आपका नाम"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl outline-none focus:border-red-500 p-3 flex-1"
                  placeholder="आपका ईमेल"
                  type="email"
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl outline-none focus:border-red-500 p-3 flex-1"
                  placeholder="अपना मोबाइल"
                  type="tel"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl outline-none focus:border-red-500 p-3"
                placeholder="आपका संदेश"
                rows={4}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold text-lg py-3 rounded-xl hover:bg-red-700 transition mt-2"
              >
                संदेश भेजें
              </button>
            </form>
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.384473501029!2d73.29519407533503!3d28.0127224760089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd2f938332e1%3A0x524d07bcbeb9bba8!2sSale%20Ki%20Holi%20Chowk!5e0!3m2!1sen!2sin!4v1760691278572!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
