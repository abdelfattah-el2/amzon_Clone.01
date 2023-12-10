import FormattedPrice from "@/components/FormattedPrice";
import visaImge from "../images/Visa_Inc._logo.svg.png";
import mastrCardImge from "../images/MasterCard_Logo.svg.png";
import paypalImge from "../images/2560px-PayPal_logo.svg.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { resetCart } from "@/store/features/nextappSlice";

export default function Payment() {
  const { productData, userInfo } = useSelector((state) => state.next);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payment, setPayment] = useState("visa");
  const [delivery, setDelivery] = useState(productData.length * 10);
  const dispatch = useDispatch();
  const route = useRouter();
  useEffect(() => {
    let amt = 0;
    productData.map((item) => {
      amt += item.price * item.quantity;
      return;
    });
    setDelivery(productData.length * 10);
    setTotalAmount(amt);
  }, [productData]);
  return (
    <div className=" flex flex-col lg:flex-row container mx-auto px-4 gap-3 ">
      <div className=" flex-1 bg-gray-100 overflow-auto h-[100vh] ">
        <div className=" border-b-[1px] px-5  sticky top-0 bg-gray-100 flex justify-between text-xl border-amazon_light">
          <h1 className="  p-2  font-semibold">Product</h1>
          <h2 className="  p-2  font-semibold">
            <h2>delivery: ${delivery}</h2>
            Totle price:
            <span className=" ">
              <FormattedPrice amout={totalAmount + delivery} />
            </span>
          </h2>
        </div>

        {productData.map((item) => {
          return (
            <div key={item.id} className=" flex  border-[5px] shadow-md  ">
              <div className="flex   ">
                <div className=" flex justify-center items-center">
                  <Image
                    className=" object-cover"
                    src={item.image}
                    width={130}
                    height={100}
                    alt="img"
                  />
                </div>
                <div className=" max-w-[330px] px-2 py-3 ">
                  <h1 className=" flex justify-between items-center text-lg font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className=" text-xs  leading-4 mb-2   ">
                    {item.description}
                  </p>
                  <div className=" flex gap-24">
                    <p className=" font-semibold">
                      Quantity: <span>{item.quantity}</span>
                    </p>
                    <p className=" font-semibold">
                      Price:
                      <span>
                        <FormattedPrice amout={item.price * item.quantity} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-6 px-10 bg-gray-100  flex-1">
        <div>
          <div className=" mt-6">
            <h1 className="  text-gray-800 font-semibold mb-2">
              Payment information
            </h1>
            <div className=" flex w-full lg:w-1/2 gap-3 mt-4">
              <div
                onClick={() => {
                  setPayment(payment !== "visa" ? "visa" : payment);
                }}
                className={
                  payment === "visa"
                    ? " border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2 bg-amazon_yellow/30"
                    : " border-transparent hover:border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2 bg-white"
                }
              >
                <Image
                  className=" object-cover"
                  width={80}
                  src={visaImge}
                  alt="img"
                />
              </div>
              <div
                onClick={() => {
                  setPayment(payment !== "mastrCard" ? "mastrCard" : payment);
                }}
                className={
                  payment === "mastrCard"
                    ? " border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2  bg-amazon_yellow/30"
                    : " border-transparent hover:border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2 bg-white"
                }
              >
                <Image
                  className=" object-cover"
                  width={80}
                  src={mastrCardImge}
                  alt="img"
                />
              </div>
              <div
                onClick={() => {
                  setPayment(payment !== "paypal" ? "paypal" : payment);
                }}
                className={
                  payment === "paypal"
                    ? " border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2 bg-amazon_yellow/30"
                    : " border-transparent hover:border-amazon_yellow cursor-pointer rounded-lg shadow-sm border-[3px] duration-300 flex items-center justify-center p-2 bg-white"
                }
              >
                <Image
                  className=" object-cover"
                  width={80}
                  src={paypalImge}
                  alt="img"
                />
              </div>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                route.push("/");
                dispatch(resetCart());
              }}
            >
              <div className=" text-gray-600 font-semibold mt-3">
                <label className=" block">Card number</label>
                <input
                  required
                  className="p-2  w-full lg:w-1/2  font-light placeholder:font-normal   my-1 outline-none border shadow-sm "
                  type="text"
                  placeholder="Your Card number"
                />
              </div>
              <div className="text-gray-600 font-semibold mt-3 flex  gap-10 ">
                <div>
                  <label className=" block">Expiration </label>
                  <input
                    required
                    className="p-2  w-full  font-light placeholder:font-normal   my-1 outline-none border shadow-sm "
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className=" block">CVV </label>
                  <input
                    required
                    className="p-2  w-full font-light placeholder:font-normal   my-1 outline-none border shadow-sm "
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <button className=" mt-12 px-5 py-3 rounded-lg hover:bg-amazon_yellow bg-amazon_yellow/80 duration-300 font-semibold">
                Confirm Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
