import React, { useEffect } from "react";

const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Camera",
  },
  {
    id: 3,
    name: "Lens",
  },
  {
    id: 4,
    name: "Tripod",
  },
];

const prices = [
  {
    id: 1,
    name: "Less than 20",
    value: "lt20",
  },
  {
    id: 2,
    name: "From 20 to 50",
    value: "btw2050",
  },
  {
    id: 3,
    name: "Greater than 50",
    value: "gt50",
  },
  {
    id: 4,
    name: "Clear Filters",
    value: "clear",
  },
];

const Filters = ({
  activeCategory,
  setActiveCategory,
  activePrice,
  setActivePrice,
  products,
  setFilters,
}) => {
  useEffect(() => {
    if (activeCategory === "All" && activePrice === "") {
      setFilters(products);
      return;
    }

    const filterCategory = products.filter((item) =>
      activeCategory === "All" ? item : item.category === activeCategory
    );

    const filterPrice = filterCategory.filter((item) =>
      activePrice === ""
        ? item
        : activePrice === "20"
        ? item.price < 20
        : activePrice === "btw2050"
        ? item.price >= 20 && item.price <= 50
        : item.price > 50
    );

    setFilters(filterPrice);
  }, [activeCategory, activePrice, products, setFilters]);
  return (
    <div>
      <div>
        {categories.map((item) => (
          <button
            onClick={() => setActiveCategory(item.name)}
            key={item.id}
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
              activeCategory === item.name && "bg-blue-500 text-white font-bold"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>
        {prices.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              item.value !== "clear"
                ? setActivePrice(item.value)
                : setActivePrice("")
            }
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
              activePrice === item.value && "bg-lime-500 text-white font-bold"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
