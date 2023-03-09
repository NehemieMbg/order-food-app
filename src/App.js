import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full text-black">
        {/* <Cart /> */}
        hey
      </div>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
