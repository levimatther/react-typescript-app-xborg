import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";
import { ButtonPrimary } from "../ButtonPrimary";

export type SingleLinkType = {
  to: string;
  label: string;
};

export const Navigation = () => {
  const [active, setActive] = useState<boolean>(false);
  const links: SingleLinkType[] = [
    { to: "gaming-passport", label: "Gaming Passport" },
    { to: "esports", label: "Esports 3.0" },
    { to: "launchpad", label: "Launchpad" },
    { to: "championship", label: "Xtreme Championship Series" },
    { to: "", label: "About us" },
  ];

  return (
    <div
      className='
    flex w-full items-center justify-between py-5 px-6 fixed top-0 left-0 w-full z-20 
    lg:pt-[33px] lg:pb-[30px] lg:px-11'
    >
      <nav
        className={`
      bg-[rgba(17,17,17,0.95)] absolute h-screen w-screen top-0 ${
        active ? "left-0 opacity-100" : "left-[-100%] opacity-0"
      }
      items-center flex flex-1 flex-col justify-center
      text-xs font-normal tracking-widest
      transition-all duration-500
      md:pl-16 lg:justify-start
      lg:flex lg:flex-row lg:relative lg:w-auto lg:h-auto lg:bg-transparent lg:opacity-100 lg:left-0 
      xl:justify-center`}
      >
        {links.map((link: SingleLinkType, index: number) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-primary100 px-5 py-4"
                : "text-light100 px-5 py-4 hover:text-primary100 ease-in duration-200 transition"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className='relative z-[1] lg:hidden'>
        <img src={Images.logo.default} alt='xborg.com' className='h-8' />
      </div>
      <div className='flex justify-center items-center lg:absolute lg:right-0 lg:mr-11'>
        <div className='absolute w-36 h-36 bg-primary100 rounded-full blur-[150px] bottom-0 hidden lg:flex' />
        <ButtonPrimary label='Get Early Access' className='relative' />
      </div>
      <div
        className='w-10 h-10 bg-dark100 flex justify-center items-center relative z-[1] lg:hidden'
        onClick={() => setActive(!active)}
      >
        <img src={Images.menu.default} alt='hamburger' />
      </div>
    </div>
  );
};
