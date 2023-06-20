import { MouseParallaxContainer } from "react-parallax-mouse";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";
import { Images } from "../../../assets/imgs/Images";
import {
  Container,
  ResponsiveParallaxLayer,
  SectionHead,
} from "../../../components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../reducer";

export type EsportsType = {
  isMobile: boolean;
};

export const Esports = ({ isMobile }: EsportsType) => {
  const { tournamentsOrganized, prizesPaid, participants } = useSelector(
    (state: GlobalState) => state.aboutUs,
  );
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className='flex flex-col items-center justify-between flex-1 md:flex-row lg:pt-[111px] lg:pb-[80px] md:h-screen'>
        <div className='flex flex-col flex-1 max-w-[528px]'>
          <SectionHead
            title='We Love Esports'
            description='We live for exciting plays, clutch moments, and seeing our favourite team lift the trophy.'
          />

          <Parallax speed={4} opacity={[0, 3]}>
            <div className='flex justify-between w-full xl:mt-14 flex-wrap'>
              <Fade
                cascade
                damping={0.9}
                duration={500}
                className='flex flex-col flex-wrap w-1/2 mt-4 xl:w-[33.333%] md:mt-4'
              >
                <div>
                  <div className='font-normal text-primary100 text-2xl tracking-widest md:text-[32px] md:font-medium md:tracking-[0.2rem]'>
                    {tournamentsOrganized}
                  </div>
                  <div className='text-sm md:text-base text-light100 mt-2 md:mt-3 tracking-wider leading-[24px] md:leading-[28px] max-w-[160px]'>
                    Tournaments Organised
                  </div>
                </div>
                <div>
                  <div className='font-normal text-primary100 text-2xl tracking-widest md:text-[32px] md:font-medium md:tracking-[0.2rem]'>
                    ${prizesPaid.toLocaleString()}
                  </div>
                  <div className='text-sm md:text-base text-light100 mt-2 md:mt-3 tracking-wider leading-[24px] md:leading-[28px]'>
                    Prizes Paid
                  </div>
                </div>
                <div>
                  <div className='font-normal text-primary100 text-2xl tracking-widest md:text-[32px] md:font-medium md:tracking-[0.2rem]'>
                    +{participants.toLocaleString()}
                  </div>

                  <div className='text-sm md:text-base text-light100 mt-2 md:mt-3 tracking-wider leading-[24px] md:leading-[28px]'>
                    Participants
                  </div>
                </div>
              </Fade>
            </div>
          </Parallax>
        </div>
        <div className='md:flex-1 relative w-full md:max-w-[500px] h-[320px] mt-6 md:mt-0 md:max-h-full md:h-full'>
          <ResponsiveParallaxLayer
            image={Images.lines02}
            factorX={-0.1}
            factorY={-0.1}
            speed={1}
            scale={1.2}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.crown}
            factorX={-0.4}
            factorY={-0.3}
            speed={isMobile ? 2 : 10}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.trophy}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 3 : 20}
            imageClassName='max-h-[324px] md:max-h-full'
          />
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
