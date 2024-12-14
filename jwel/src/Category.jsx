import { useParams } from "react-router-dom";

function Category() {
  const { categoryName } = useParams();

  const categoryData = {
    Mangalsutras: [
      { img: "/images/mangalsutra1.jpg", name: "Gold Mangalsutra" },
      { img: "/images/mangalsutra2.jpg", name: "Diamond Mangalsutra" },
    ],
    Necklaces: [
      { img: "/images/necklace1.jpg", name: "Pearl Necklace" },
      { img: "/images/necklace2.jpg", name: "Gold Necklace" },
    ],
  };

  const items = categoryData[categoryName] || [];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-orange-500 text-center">
        {categoryName}
      </h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {items.map((item, index) => (
          <div key={index} className="p-4 shadow-lg rounded-md">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <p className="text-center mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
