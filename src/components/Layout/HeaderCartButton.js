import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className="text-slate-100 font-light bg-slate-700/50 hover:bg-slate-700 px-4 py-2 rounded-full flex gap-2 items-center justify-center">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>-</span>
      <span className="text-emerald-400">3</span>
    </button>
  );
};

export default HeaderCartButton;
