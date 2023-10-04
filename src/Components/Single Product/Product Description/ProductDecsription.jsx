import React, { useState } from "react";
import hometheatre from "../../../assets/Home theatre.jpeg";
import clothes1 from "../../../assets/Clothes 1.jpeg";
import clothes2 from "../../../assets/Clothes 2.jpeg";
import headphones from "../../../assets/headphones.jpeg";
import phone1 from "../../../assets/Phone 1.jpeg";
import phone2 from "../../../assets/Phone 2.jpeg";

const ProductDecsription = () => {
  const [ID, setID] = useState();
  const [image, setImage] = useState();
  const handleClick = (id, image) => {
    if (id) {
      setID(id);
      setImage(image);
    }
  };
  return (
    <>
      <div className="">
        {/* Product Image */}
        <div className="">
          <div className="">
            <div className="">
              <img
                src={ID ? image : headphones}
                alt="home theatre"
                className="w-80 h-80 rounded-xl"
              />
            </div>

            <div className="space-x-1 my-3">
              {products.map((e) => (
                <button
                  onClick={() => handleClick(e.id, e.img)}
                  key={e.id}
                  className=""
                >
                  <img
                    src={e.img}
                    alt={e.alt}
                    className="w-16 h-16 rounded-xl"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className=""></div>

        {/* Buy Now Button */}
        <div className=""></div>
      </div>
    </>
  );
};

export default ProductDecsription;

export const products = [
  {
    id: 1,
    img: clothes1,
    alt: "Clothes",
  },
  {
    id: 2,
    img: clothes2,
    alt: "Clothes",
  },
  {
    id: 3,
    img: headphones,
    alt: "Headphones",
  },
  {
    id: 4,
    img: phone1,
    alt: "Mobile Phone",
  },
  {
    id: 5,
    img: phone2,
    alt: "Mobile Phone",
  },
];
