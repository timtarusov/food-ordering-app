import { HeaderProps } from "../../types/Layout";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: HeaderProps) => {
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-20 bg-amber-800
      text-white flex justify-between items-center
      px-20 shadow-md shadow-transparent z-10"
      >
        <h1 className="font-bold text-3xl">ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="h-[25rem] z-0 overflow-hidden">
        <img
          className="h-full object-cover  w-[100%]"
          src={mealsImage}
          alt="A table with food"
        />
      </div>
    </>
  );
};

export default Header;
// Language: typescript
// Path: src/components/Layout/Header.tsx
