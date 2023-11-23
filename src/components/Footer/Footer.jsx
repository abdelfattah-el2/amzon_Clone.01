import Image from "next/image";
import logo from "../../images/logo.png";

export default function Footer() {
  return (
    <div
      className="w-full h-20 bg-amazon_light
      text-gray-300 flex items-center justify-center gap-4"
    >
      <Image className="w-24" src={logo} alt="logo" />
      <p className=" text-sm  -mt-4 ">
        All right reserved
        <a
          className=" hover:text-white hover:underline decoration-[1px] 
      duration-300 "
          href="https://www.amazon.ge/"
          target="_blank"
        >@copy right
        </a>
      </p>
    </div>
  );
}
