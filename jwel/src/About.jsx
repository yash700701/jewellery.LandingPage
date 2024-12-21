import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display"; // Elegant font like in the image
import backgroundImage from "./images/bg.jpg";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header />
      <section
        className="relative w-full text-gray-800 mt-9"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundPosition: "center top",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
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
            About <span className="text-orange-300">Jwels Co.</span>
          </motion.h1>

          {/* Intro Section */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Jwels Co. celebrates the art of elegance, delivering timeless
            jewelry pieces crafted with precision and passion. From modern to
            vintage, our creations embody sophistication and beauty, perfect for
            every occasion.
          </motion.p>

          {/* Animated Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Card */}
            <motion.div
              className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-orange-600">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To redefine elegance in the jewelry world by blending tradition
                with modern aesthetics, creating timeless pieces that resonate
                with individuality.
              </p>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <img
                src="https://img.freepik.com/premium-photo/traditional-gold-earrings-set_1396-367.jpg"
                alt="Jewelry craftsmanship"
                className="rounded-lg shadow-lg mx-auto"
              />
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-orange-600">
                Our Promise
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing quality, authenticity, and unique
                designs that symbolize love, elegance, and beauty for every
                customer.
              </p>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            className="mt-16 p-8 bg-orange-300 bg-opacity-80 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h3 className="text-2xl italic text-gray-800">
              "Jewelry is not just an accessory; it’s an expression of who you
              are."
            </h3>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
