import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import FormattedPrice from "../FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/nextappSlice";
import { addTOFavorite } from "../../store/features/nextappSlice";

export default function Produt({ product }) {
  const dispatch = useDispatch();
  return (
    <div className=" w-full px-6 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6">
      {product.map((item) => {
        return (
          <div
            className=" w-full bg-white text-black p-4 
          border  border-gray-300 rounded-lg  group  overflow-hidden"
            key={item._id}
          >
            <div className=" w-full h-[260px] relative">
              <Image
                src={item.image}
                height={400}
                priority
                width={400}
                alt={item.title}
                className=" w-full h-full object-cover scale-90 
                hover:scale-100 transition-transform duration-300"
              />
              <div
                className=" absolute w-12 h-24 bottom-10 right-0
                border-gray-400 border-[1px] bg-white rounded-md flex 
                  flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform"
              >
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: item._id,
                        brand: item.brand,
                        category: item.category,
                        description: item.description,
                        image: item.image,
                        isNew: item.isNew,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        title: item.title,
                        quantity: 1,
                      })
                    )
                  }
                  className=" w-full h-full border-b-gray-400 border-b-[1px] flex 
                items-center justify-center text-xl  bg-transparent
              hover:bg-amazon_yellow cursor-pointer duration-300"
                >
                  <HiShoppingCart />
                </span>
                <span
                  onClick={() =>
                    dispatch(
                      addTOFavorite({
                        _id: item._id,
                        brand: item.brand,
                        category: item.category,
                        description: item.description,
                        image: item.image,
                        isNew: item.isNew,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        title: item.title,
                        quantity: 1,
                      })
                    )
                  }
                  className=" w-full h-full border-b-gray-400 border-b-[1px] flex 
                items-center justify-center text-xl  bg-transparent
                hover:bg-amazon_yellow cursor-pointer duration-300"
                >
                  <FaHeart />
                </span>
              </div>
              {item.isNew && (
                <p
                  className=" absolute  top-0 right-0  text-amazon_blue
                animate-bounce  font-medium text-xs tracking-wide"
                >
                  !Save <FormattedPrice amout={item.oldPrice - item.price} />
                </p>
              )}
            </div>
            <hr />
            <div className=" px-4 py-3 flex flex-col gap-1">
              <p className=" text-xs text-gray-500 trac">{item.category}</p>
              <p className=" text-base font-medium">{item.title}</p>
              <p className=" flex items-center  gap-2">
                <span className="text-sm line-through ">
                  <FormattedPrice amout={item.oldPrice} />
                </span>
                <span>
                  <FormattedPrice amout={item.price} />
                </span>
              </p>
              <p className=" text-xs text-gray-600 text-justify">
                {item.description.substring(0, 50)}...
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className=" h-10 font-medium bg-amazon_blue
              hover:text-black text-white duration-300 mt-2 rounded-md hover:bg-amazon_yellow"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
