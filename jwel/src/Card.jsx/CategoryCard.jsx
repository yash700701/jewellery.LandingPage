import React from "react";

function CategoryCard({ data }) {
  const { img, category } = data;
  console.log(img);

  return (
    <div className="h-48 w-48 p-5">
      <img className="rounded-xl" src={`${img}`} alt="img" />
      <p>{category}</p>
    </div>
  );
}

export default CategoryCard;
