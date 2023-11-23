import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import Link from "next/link";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/features/nextappSlice    ";
export default function Header() {
  const { data: session } = useSession();
  const { productData, favotiteData, userInfo } = useSelector(
    (state) => state.next
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        })
      );
    }
  }, [session]);
  return (
    <div className=" w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50 ">
      <div
        className=" w-full h-full inline-flex justify-between 
      items-center gap-1 mdl:gap-3 px-4"
      >
        {/* logo ⬇️ */}
        <div
          className=" border  border-transparent cursor-pointer px-2 duration-300 h-[70px] flex 
        justify-center items-center hover:border-white"
        >
          <Link href={"/"}>
            <Image className="w-28 mt-1  object-cover" src={logo} alt="logo" />
          </Link>
        </div>
        {/* delivery ⬇️ */}
        <div
          className="  border  border-transparent px-2 cursor-pointer duration-300 h-[70px]  
        justify-center gap-1 items-center hover:border-white xl:inline-flex hidden "
        >
          <SlLocationPin />
          <div className=" text-xs">
            <p>Delivery To </p>
            <p className=" text-white uppercase font-bold ">USA</p>
          </div>
        </div>
        {/* SearchBar ⬇️ */}
        <div className=" flex-1 h-10  hidden md:inline-flex  items-center justify-between relative">
          <input
            className=" w-full h-full rounded-md px-2 placeholder:texy-sm 
              focus-visible:border-amazon_yellow text-base text-black border-[3px] border-transparent  outline-none"
            type="text"
            placeholder="Search next_amazon_yt products"
          />
          <span className="w-12 text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md h-full bg-amazon_yellow">
            <HiOutlineSearch />
          </span>
        </div>
        {/* signIn ⬇️ */}
        {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className=" text-xs  text-gray-100 flex flex-col justify-between">
              <p className=" text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="  text-xs text-gray-100 flex  flex-col justify-center border border-transparent 
        hover:border-white duration-300  cursor-pointer h-[70%] px-2  "
          >
            <p>Hello, sign in </p>
            <p className=" text-white font-bold  flex items-center">
              Account & Lists
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* fovorit ⬇️ */}
        <div
          className="  text-xs text-gray-100 flex  flex-col justify-center border 
        border-transparent relative hover:border-white duration-300  cursor-pointer h-[70%] px-2  "
        >
          <p>Marked</p>
          <p className=" text-white font-bold">& Favorite</p>
          <span>
            {favotiteData.length > 0 && (
              <span
                className=" absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex
               items-center justify-center text-xs text-amazon_yellow"
              >
                {favotiteData.length}
              </span>
            )}
          </span>
        </div>
        {/* cart ⬇️ */}
        <Link
          href={"/cart"}
          className=" flex items-center duration-300 border px-2 h-[70%] border-transparent
         hover:border-white  cursor-pointer relative "
        >
          <Image
            className=" w-auto object-cover h-8"
            src={cartIcon}
            alt="CartIcon"
          />
          <p className=" text-xs text-white font-bold mt-3">Cart</p>
          <span className=" absolute  text-amazon_yellow text-sm top-2 left-[29px]  font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
}
