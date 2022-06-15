import { HeaderCartButtonProps } from "../../types/Layout";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button
      className="border-none bg-amber-900 text-white
    py-3 px-6 flex justify-around items-center rounded-3xl font-bold
    active:bg-amber-600 hover:bg-amber-700 group
    md:px-12"
      onClick={props.onClick}
    >
      <span className="w-5 h-5 mr-2">
        <CartIcon />
      </span>
      <span className="hidden md:block">Your Cart</span>
      <span
        className="bg-amber-800 py-1 px-4 rounded-3xl ml-4
      font-bold group-hover:bg-amber-600  group-active:bg-amber-500"
      >
        3
      </span>
    </button>
  );
};
export default HeaderCartButton;
