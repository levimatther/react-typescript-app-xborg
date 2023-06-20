import { AppViewmodel } from "../../AppViewModel";
import { Images } from "../../assets/imgs/Images";
import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";

export type SidebarType = {
  app: AppViewmodel;
  active: number;
  total: number;
};

export const Sidebar = ({ app, active, total }: SidebarType) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const totalArray = Array.from(Array(total).keys());

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`border border-dark200 
    pt-8 hidden flex-col items-center 
    fixed top-0 bottom-0 left-0 z-50 hidden
    transition-all duration-500 delay-[1.5s]
    ${loaded ? "w-25 bg-transparent" : "w-full bg-dark100"}
    lg:flex`}
    >
      <svg
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`w-8 absolute transition-all duration-300 scale-[2] delay-[1s] ${
          loaded ? "top-[32px] left-[32px] scale-[1]" : "top-1/2 left-1/2"
        }`}
      >
        <path
          d='M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z'
          fill='#EB3A4A'
          className={`transition-all duration-300 ${
            loaded
              ? "translate-y-[0px] opacity-[1]"
              : "translate-y-[5px] opacity-[0]"
          }`}
        />
        <path
          d='M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z'
          fill='#EB3A4A'
          className={`transition-all duration-300 ${
            loaded
              ? "translate-y-[0px] opacity-[1]"
              : "translate-y-[-5px] opacity-[0]"
          }`}
        />
      </svg>

      <div
        className={`absolute top-0 bottom-0 flex flex-col justify-center items-center transition-opacity duration-300 delay-[1.7s] ${
          loaded ? "opacity-100 left-[33px]" : "opacity-0 left-[-50px]"
        }`}
      >
        {totalArray.map((item: number) => (
          <div
            className='relative flex flex-col justify-center items-center'
            key={item}
          >
            <Tippy content={`Section-${item}`} placement='right'>
              <div
                className={`py-[15px] px-[10px] cursor-pointer`}
                onClick={() => {
                  if (active !== item) {
                    app.scrollToSpecifiedScreen(item);
                  }
                }}
              >
                <div
                  className={`w-0.5 h-0.5 border-2 ease-in duration-200 transition-all ${
                    active === item
                      ? " w-[9px] h-[9px] border-primary100"
                      : "border-dark200"
                  }`}
                />
              </div>
            </Tippy>
            <div
              className={`w-px opacity-[0.3] transition-all duration-200 ease-in bg-light100 ${
                active === item ? "h-[80px]" : "h-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
