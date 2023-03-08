import Background from "../../../assets/wallpaper-4.jpg";
import MealItemFrom from "./MealItemForm";

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)} €`;

  return (
    <li>
      <div>
        <img
          src={Background}
          className="w-[294px] h-[150px] object-cover p-0 m-0 "
        />
        <div className="py-1">
          <div className="flex justify-between items-center">
            <h3 className="text-md">{props.name}</h3>
            <MealItemFrom />
          </div>
          <div className="font-light texd-md">{price}</div>
          <div className="font-thin text-sm">{props.description}</div>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
