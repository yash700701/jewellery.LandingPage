import React, { useEffect, useState } from "react";
import items from "./NecklaceItems";
import { useDispatch } from "react-redux";
import { addPrice } from "./store/cart";

function CardItems(props) {
  const { productId, quantity } = props.data;
  const [detail, detailSet] = useState(null); // Start as null

  useEffect(() => {
    const findDetails = items.filter((product) => product.id == productId)[0];
    detailSet(findDetails);
  }, [productId]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (detail && detail.price) {
      // Dispatch only when detail and price are defined
      dispatch(addPrice(quantity * detail.price));
    }
  }, [detail, quantity, dispatch]);

  if (!detail) return null; // Prevent rendering until detail is loaded

  return (
    <li className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={detail.image}
          className="w-16 h-16 object-cover rounded-lg"
          alt={detail.name}
        />
        <div>
          <h2 className="text-lg font-semibold">{detail.name}</h2>
          <p className="text-sm text-gray-500">
            ₹{detail.price} x {quantity} = {detail.price * quantity}
          </p>
        </div>
      </div>
      <span className="text-gray-700">Qty: {quantity}</span>
    </li>
  );
}

export default CardItems;
