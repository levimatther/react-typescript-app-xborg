import { Fade } from "react-awesome-reveal";
import { Images } from "../../assets/imgs/Images";
import Scramble from "react-scramble";
import { useRef } from "react";
import { useIsvisible } from "../../hooks";
export type SectionHeadType = {
  title: string;
  description?: string;
};

export const SectionHead = ({ title, description }: SectionHeadType) => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsvisible(myRef);
  return (
    <div className="flex flex-col relative mt-12 md:mt-0" ref={myRef}>
      <div className="flex relative">
        <div className="w-0.5 bg-primary100 drop-shadow-[0px_0px_4px_#EB3A4A]" />
        <div className="flex flex-col pl-3.5 md:pl-[1.375rem]">
          <img src={Images.logo.default} alt={title} className="w-2.5" />
          <h1 className="text-2xl leading-[77px] text-primary100 font-black pt-4 font-section tracking-widest md:text-[2rem] md:leading-[3.125rem] lg:leading-[77px] lg:text-[62px]">
            {isVisible && (
              <Scramble
                autoStart
                text={title}
                speed="medium"
                steps={[
                  {
                    roll: 10,
                    action: "+",
                    type: "random",
                  },
                  {
                    action: "-",
                    type: "all",
                  },
                ]}
              />
            )}
          </h1>
          {description && (
            <Fade cascade damping={0.9} duration={500}>
              <h2 className="text-light100 text-sm leading-[26px] font-normal tracking-[0.06em] mt-4 md:leading-7 md:text-base">
                {description}
              </h2>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};
