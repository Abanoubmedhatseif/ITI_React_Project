import React from "react";
import Button from "../reusables/Button";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${
      "http://127.0.0.1:8000" + data.image
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="py-8">
      <div className="container">
        <div
          className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
          style={cardStyle}
        >
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                {data.name}
              </p>
              <Link to={`/categories/${data.id}`}>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
