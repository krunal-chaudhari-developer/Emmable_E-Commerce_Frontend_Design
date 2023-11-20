import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import BuyNow from "../../Buy Now/BuyNow";

const ProductDecsription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const [data, setData] = useState({
    id: undefined,
    image: undefined,
  });

  const handleClick = (image, id) => {
    if (id) {
      setData({ id: id, image: image });
    }
  };

  return (
    <>
      <div className="grid grid-cols-3">
        {/* Product Image */}
        <div className="mx-10 my-5">
          <div className="">
            <img
              // src={product.image}
              src={data.id ? data.image : product.thumbnail}
              alt="home theatre"
              className="w-80 h-80 rounded-xl"
            />
          </div>

          <div className="space-x-1 my-3 flex">
            {product.images && product.images.length > 0 ? (
              product.images.map((e, id) => (
                <div key={id}>
                  <button className="" onClick={() => handleClick(e, id + 1)}>
                    <img
                      src={e}
                      alt="Product"
                      className="w-16 h-16 rounded-xl outline-none"
                    />
                  </button>
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="my-5">
          <div className="">
            <div className="">
              <h1 className="font-bold text-2xl capitalize">{product.title}</h1>
            </div>

            <div className="">
              <div className="my-2 flex space-x-3">
                <div className="">
                  <h1 className="text-xl font-semibold">$ {product.price}</h1>
                </div>
                <div className="">
                  <h1 className="text-red-500 bg-red-100 px-2 py-0.5 rounded-md">
                    {product.discountPercentage} %
                  </h1>
                </div>
              </div>

              <div className="flex my-2.5 space-x-2">
                <div className="flex">
                  <AiFillStar className="text-yellow-300 mt-1 mr-1" />
                  <h1 className="font-semibold">{product.rating}</h1>
                </div>
                {/* <div className="border-l" /> */}
                {/* <div className="flex space-x-1">
                  <h1 className="font-bold">Stock : </h1>
                  <h1 className="font-semibold">{product.stock}</h1>
                </div> */}
              </div>
            </div>

            <div className="flex my-2">
              <h1 className="text-xs lg:text-sm bg-gray-300 text-gray-600 px-1 py-0.5 rounded-md">
                Company
              </h1>
              {/* <IoLocationSharp className="text-gray-600 sm:mt-1" /> */}
              <h1 className="font-semibold text-xs lg:text-sm capitalize mx-2 mt-0.5">
                {product.brand}
              </h1>
            </div>
          </div>

          <div className="border my-3" />

          <div className="">
            <div className="">
              <h1 className="font-bold text-lg my-1">Details</h1>
              <div className="grid grid-cols-3">
                <div className="space-y-0.5">
                  <h1 className="text-gray-500">Condition</h1>
                  <h1 className="text-gray-500">Unit Weight</h1>
                  <h1 className="text-gray-500">Category</h1>
                </div>

                <div className="space-y-0.5">
                  <h1 className="font-semibold">New</h1>
                  <h1 className="font-semibold">200 g</h1>
                  <h1 className="font-semibold capitalize">
                    {product.category}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border my-3" />

          <div className="my-2">
            <h1 className="fon-normal font-custom">{product.description}</h1>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="">
          <BuyNow stock={product.stock} price={product.price} />
        </div>
      </div>
    </>
  );
};

export default ProductDecsription;
