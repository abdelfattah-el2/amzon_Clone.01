import { resetCart } from "@/store/features/nextappSlice";
import { useDispatch } from "react-redux";

export default function ResetCart() {
  const dispatch = useDispatch();
  const handeleReast = () => {
    const confimReast = window.confirm(
      "Are you sure to reset itmes from the cart ?"
    );
    if (confimReast) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handeleReast}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg  hover:bg-red-600 hover:text-white
     duration-300"
    >
      Reast Cart
    </button>
  );
}
