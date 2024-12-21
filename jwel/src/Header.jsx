import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Links } from "react-router-dom";

function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const cart = useSelector((s) => s.cart.items);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [cart]);
  return (
    <div className="w-screen p-3 z-10 flex   top-0 fixed justify-between bg-white">
      <Link to={"/"}>
        <div
          className="pl-3 pt-1 font-extrabold text-xl  text-orange-400"
          style={{ fontFamily: "brilliant" }}
        >
          Jwels Co.
        </div>
      </Link>
      <ul
        className="flex gap-4 text-[15px]"
        style={{ fontFamily: "Montserrat Alternates" }}
      >
        <li className="px-3 py-1   rounded-2xl hover:outline outline-1 outline-offset-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 py-1  rounded-2xl hover:outline outline-1 outline-offset-2 ">
          <Link to="/about">About</Link>
        </li>
        <li className="px-3 py-1  rounded-2xl hover:outline outline-1 outline-offset-2 ">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-3 py-1  rounded-2xl hover:outline outline-1 outline-offset-2 ">
          <Link to="/cart">
            Cart{" "}
            <span className=" p-1 rounded-full text-white text-xs px-2 bg-red-600">
              {totalQuantity}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
