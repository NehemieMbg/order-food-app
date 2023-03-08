import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// Renders the meals list

const Meals = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <MealsSummary />
      </div>
      <div className="flex justify-center">
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
