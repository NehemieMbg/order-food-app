import { Fragment } from "react";

import mealsImage from "../../assets/food-wallpaper.jpg";

const Header = (props) => {
  // Using Fragment as a wrapper.
  return (
    <Fragment>
      <header className="w-full bg-black flex justify-between px-16 py-8">
        <h1 className="text-slate-100 text-2xl font-extralight cursor-pointer">
          JustEat
        </h1>
        <button className="text-slate-100 text-xl font-light bg-slate-700/50 hover:bg-slate-700 px-12 py-2 rounded-md">
          Cart
        </button>
      </header>
      <div>
        <img
          src={mealsImage}
          alt="Table of delicious asian food"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </Fragment>
  );
};

export default Header;
