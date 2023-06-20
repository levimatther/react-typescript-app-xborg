import { useEffect, useRef, useState } from "react";
import useScrollSpy from "react-use-scrollspy";
import { debounce } from "lodash";
import tailwind from "../../tailwind.config";
import { AppViewmodel } from "../../AppViewModel";
import { Sidebar } from "../../components";
import {
  EmpowerPlayers,
  EmpowerFans,
  Esports,
  Prometheus,
  OurPlayers,
  OurTeam,
  BecomeXplorer,
  Partners,
} from "./components";

export type AboutUsType = {
  app: AppViewmodel;
};

export const AboutUs = ({ app }: AboutUsType) => {
  const screens = tailwind.theme?.screens as any;
  const lgString = screens.lg?.replace("px", "") || 0;
  const lg = parseInt(lgString);

  // Most parallax animations feels to fast on mobile
  // This will make sure that we still have nice view
  // On mobile devices
  const [isMobile, setisMobile] = useState<boolean>(window.innerWidth <= lg);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const active = useScrollSpy({
    sectionElementRefs: sectionRefs,
    scrollingElement: { current: app.wrapper },
    offsetPx: -150,
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        setisMobile(window.innerWidth <= lg);
      }, 300)
    );
  }, []);

  return (
    <div className="flex flex-col">
      <Sidebar total={sectionRefs.length} active={active || 0} app={app} />
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col justify-between lg:h-screen h_lg:h-auto"
          ref={sectionRefs[0]}
        >
          <EmpowerPlayers isMobile={isMobile} />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[1]}
        >
          <EmpowerFans isMobile={isMobile} />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[2]}
        >
          <Esports isMobile={isMobile} />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[3]}
        >
          <Prometheus isMobile={isMobile} />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[4]}
        >
          <OurPlayers isMobile={isMobile} />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[5]}
        >
          <OurTeam />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[6]}
        >
          <Partners />
        </div>
        <div
          className="flex flex-col justify-center lg:h-screen h_lg:h-auto"
          ref={sectionRefs[7]}
        >
          <BecomeXplorer />
        </div>
      </div>
    </div>
  );
};
