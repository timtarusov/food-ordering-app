import { MealItemProps } from "../../../types/Meals";
import MealItemForm from "./MealItemForm";

const MealItem = (props: MealItemProps) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li
      key={props.id}
      className="flex justify-between items-center
    m-4 pb-4 border-b-2 border-red-600"
    >
      <div>
        <h3 className="mb-1 font-bold text-lg">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-2xl text-amber-800">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
