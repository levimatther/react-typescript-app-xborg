import { Parallax } from "react-scroll-parallax";
import { MouseParallaxChild } from "react-parallax-mouse";

export type ResponsiveParallaxLayerType = {
  image: any;
  factorX: number;
  factorY: number;
  speed: number;
  scale?: number;
  imageClassName?: string;
};

export const ResponsiveParallaxLayer = ({
  image,
  factorX,
  factorY,
  speed,
  imageClassName = "",
  scale = 1,
}: ResponsiveParallaxLayerType) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <Parallax speed={speed} className='h-full'>
        <MouseParallaxChild
          factorX={factorX}
          factorY={factorY}
          className='h-full'
        >
          <div
            className='h-full'
            style={{
              transform: "scale(" + scale + ")",
            }}
          >
            <img
              src={image}
              alt=''
              className={`absolute max-w-full md:max-h-full left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] ${imageClassName}`}
            />
          </div>
        </MouseParallaxChild>
      </Parallax>
    </div>
  );
};
