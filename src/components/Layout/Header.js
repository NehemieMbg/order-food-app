import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/wallpaper-3.jpg";

const Header = (props) => {
  // Using Fragment as a wrapper.
  return (
    <Fragment>
      <header className="w-full bg-black flex justify-between items-center px-16 py-8">
        <h1 className="text-slate-100 text-2xl font-extralight cursor-pointer">
          Just <span className="font-medium">Eats</span>
        </h1>
        <HeaderCartButton />
      </header>
      <div>
        <img
          src={mealsImage}
          alt="Table of delicious asian food"
          className="w-full h-[330px] object-cover"
        />
      </div>
    </Fragment>
  );
};

export default Header;
