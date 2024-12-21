import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";
import backgroundImage from "./images/bg.jpg";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="h-screen">
      <Header />
      <section
        className="relative w-full text-gray-800"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "repeat", // Repeats the image
            backgroundSize: "contain", // Ensures the image retains its aspect ratio
            backgroundPosition: "center top",
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-16 px-6 text-center">
          {/* Page Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in <span className="text-orange-400">Touch</span>
          </motion.h1>

          {/* Contact Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Have questions or want to know more about our offerings? We'd love
            to hear from you. Drop us a message, and our team will get back to
            you promptly.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-200 bg-opacity-90 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message Input */}
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="col-span-2 bg-orange-400 text-white text-lg font-semibold py-3 rounded-lg hover:bg-orange-500 transition-all w-1/3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="mt-16 p-8 bg-orange-100 bg-opacity-80 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h3 className="text-2xl italic text-gray-800 ">
              "We’re here to help you every step of the way."
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Email:{" "}
              <a href="mailto:support@jwelsco.com" className="underline">
                support@jwelsco.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              Phone:{" "}
              <a href="tel:+123456789" className="underline">
                +1 234 567 89
              </a>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
