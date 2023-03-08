import Fire from "../Fire/Fire";

const MealsSummary = () => {
  return (
    <section className="text-left rounded-xl bg-black text-slate-100 mt-8 mb-20 py-2 px-8">
      <div className="flex gap-2">
        <h2 className="pb-1 text-xl font-semibold">
          Delicious Hot Food, Delivered To You In Time.
        </h2>
        <Fire />
      </div>
      <div className="font-thin">
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default MealsSummary;
