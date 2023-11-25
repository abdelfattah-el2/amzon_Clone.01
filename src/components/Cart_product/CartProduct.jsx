import Image from "next/image";
import FormattedPrice from "../FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreasesQuantity,
  deleteProduct,
  increasesQuantity,
} from "@/store/features/nextappSlice";

export default function CartProduct({ item }) {
  const dispatch = useDispatch();
  return (
    <div className=" bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        className=" object-cover"
        src={item.image}
        alt="img-TO-product"
        width={150}
        height={150}
      />
      <div className="flex items-center px-2 gap-4 ">
        <div className=" flex flex-col gap-1">
          <h1 className=" font-semibold text-lg text-amazon_blue">
            {item.title}
          </h1>
          <p className=" text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit price
            <span className=" font-semibold text-amazon_blue">
              <FormattedPrice amout={item.price} />
            </span>
          </p>
          <div className=" flex items-center  gap-6">
            <div
              className=" flex items-center  mt-1 
             rounded-full w-28 shadow-lg shadow-gray-300 justify-between border  border-gray-300 px-4 py-1"
            >
              <span
                onClick={() => dispatch(increasesQuantity(item))}
                className="w-6 h-6 flex  items-center justify-center  rounded-full text-base bg-transparent 
               hover:bg-gray-300  cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </span>
              {item.quantity}
              <span
                onClick={() => dispatch(decreasesQuantity(item))}
                className="w-6 h-6 flex  items-center justify-center  rounded-full text-base bg-transparent 
               hover:bg-gray-300  cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => dispatch(deleteProduct(item))}
              className=" flex items-center text-sm font-medium 
             text-gray-400 hover:text-red-600 duration-300 cursor-pointer"
            >
              <IoMdClose className=" mt-[2px]" />
              <p>remove</p>
            </div>
          </div>
        </div>
        <div className=" text-lg  font-semibold  text-amazon_blue">
          <FormattedPrice amout={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
}
