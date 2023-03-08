import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className="text-slate-100 text-xl font-light bg-slate-700/50 hover:bg-slate-700 px-12 py-2 rounded-md flex gap-4 items-center justify-center">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-emerald-700 rounded-full px-2">3</span>
    </button>
  );
};

export default HeaderCartButton;
