import { MealItemFormProps } from "../../../types/Meals";
import Input from "../../UI/Input";

const MealItemForm = (props: MealItemFormProps) => {
  return (
    <form className="text-right">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button
        className="cursor-pointer bg-orange-900
        text-white px-6 py-1
      border-2 border-orange-900 rounded-3xl font-bold
      hover:bg-orange-800 hover:border-orange-800
      hover:active:bg-orange-700 hover:active:border-orange-700"
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
