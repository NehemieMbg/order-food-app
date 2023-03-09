import Input from "../../UI/Input";

const MealItemFrom = (props) => {
  return (
    <form className="flex justify-center items-center">
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="text-2xl font-light mr-1">+</button>
    </form>
  );
};

export default MealItemFrom;
