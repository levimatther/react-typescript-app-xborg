import { MouseEvent } from "react";
import { Link } from "react-router-dom";

export type ButtonPrimaryType = {
  label: string;
  className?: string;
  to?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const ButtonPrimary = ({
  label,
  to = "",
  className = "",
  onClick,
}: ButtonPrimaryType) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
      bg-primary100 py-3 px-4 text-light200 text-sm flex justify-center items-center font-medium leading-[18px] tracking-widest ease-in duration-200 transition 
      md:p-4 md:text-light100 md:text-xs
      hover:bg-primary200 ${className}`}
    >
      {label}
    </Link>
  );
};
