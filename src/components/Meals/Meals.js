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
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
