import { InputProps } from "../../types/UI";

const Input = (props: InputProps) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className="w-16 rounded-md border-red-600 pl-4" {...props.input} />
    </div>
  );
};

export default Input;
