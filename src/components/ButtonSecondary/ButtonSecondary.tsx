import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";

export type ButtonSecondaryType = {
  label: string;
  to?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const ButtonSecondary = ({
  label,
  to = "",
  onClick,
}: ButtonSecondaryType) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className='py-4 px-3 text-light100 text-xs flex justify-center items-center tracking-widest relative h-12 md:h-8 group'
    >
      <div className='w-full h-12 md:h-8 absolute border-light100 border left-0 ease-in duration-200 transition transition-width group-hover:w-full md:w-8' />
      <span className='bg-dark100 relative p-1 flex items-center'>
        {label}
        <img
          src={Images.arrowRight.default}
          className='ml-2 group-hover:ml-4 transition-margin duration-300 ease-in'
          alt='arrow-right'
        />
      </span>
    </Link>
  );
};
