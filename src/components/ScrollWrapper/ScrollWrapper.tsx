import { useState, useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProviderProps } from "react-scroll-parallax/dist/components/ParallaxProvider/types";
import { AppViewmodel } from "../../AppViewModel";

export type ScrollWrapperType = {
  children: any;
};

export const ScrollWrapper = ({ children }: ScrollWrapperType) => {
  const [app] = useState<AppViewmodel>(new AppViewmodel());
  const [scrollWrap, setScrollWrap] = useState<HTMLElement | undefined>(
    undefined,
  );

  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<SimpleBar>(null);

  useEffect(() => {
    const parent = parentRef.current;

    if (parent?.clientHeight && scrollRef) {
      const bar = scrollRef?.current;
      const wrapper = bar?.getScrollElement() as HTMLElement;

      setScrollWrap(wrapper);

      app.rewriteDefaultScrolling(wrapper, parent);
    }
  }, []);

  const parallaxProviderProps: ParallaxProviderProps = {
    scrollContainer: scrollWrap,
    scrollAxis: "vertical",
  };

  return (
    <div className='flex flex-1 overflow-hidden' ref={parentRef}>
      <SimpleBar className='flex w-full' ref={scrollRef}>
        {scrollWrap && (
          <>
            <ParallaxProvider {...parallaxProviderProps}>
              {children(app)}
            </ParallaxProvider>
          </>
        )}
      </SimpleBar>
    </div>
  );
};
