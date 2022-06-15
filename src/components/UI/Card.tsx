import { CardProps } from "../../types/UI";
const Card = (props: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
