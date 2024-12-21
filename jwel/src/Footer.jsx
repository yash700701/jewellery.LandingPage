import React from "react";

function Footer() {
  return (
    <footer
      className="bg-slate-200 mt-10 pt-4"
      style={{ fontFamily: "Montserrat Alternates" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-center gap-8 p-2">
        {/* <div>
      <h1 className="text-2xl font-black text-white" style={{fontFamily: 'brilliant'}}>Jewels Co.</h1>
      <p className="mt-2 text-sm">
        Discover timeless elegance with our handcrafted jewelry. Perfect for every occasion.
      </p>
    </div> */}

        <div>
          <h2 classNameName="text-white">Quick Links</h2>
          <ul className="mt-4 space-y-1 font-extralight text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-black">Contact Us</h2>
          <ul className="mt-4 space-y-1 text-sm font-extralight">
            <li>Email: support@jewelsco.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Diamond Lane, Gem City</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-700 p-2 text-center text-sm">
        &copy; 2024 JewelsCo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
