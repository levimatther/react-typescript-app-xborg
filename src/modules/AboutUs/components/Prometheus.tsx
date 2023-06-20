import { MouseParallaxContainer } from "react-parallax-mouse";
import { Fade } from "react-awesome-reveal";
import { Images } from "../../../assets/imgs/Images";
import { ButtonSecondary, Container, SectionHead } from "../../../components";
import { ResponsiveParallaxLayer } from "../../../components/ResponsiveParallaxLayer";

export type PrometheusType = {
  isMobile: boolean;
};

export const Prometheus = ({ isMobile }: PrometheusType) => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className='flex flex-col-reverse items-center justify-between flex-1 md:flex-row lg:pt-[111px] lg:pb-[80px] md:h-screen'>
        <div className='flex-1 relative w-full mt-8 min-h-[320px] md:max-w-[510px] md:max-h-full md:h-full'>
          <ResponsiveParallaxLayer
            image={Images.logo02}
            factorX={-0.1}
            factorY={-0.1}
            speed={isMobile ? 1 : 3}
            scale={1.2}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.smoke1_01}
            factorX={-0.2}
            factorY={-0.1}
            speed={isMobile ? 2 : 8}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.smoke1_02}
            factorX={-0.1}
            factorY={-0.3}
            speed={isMobile ? 3 : 10}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.render3d}
            factorX={-0.4}
            factorY={-0.3}
            speed={isMobile ? 4 : 15}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.sparks}
            factorX={-0.3}
            factorY={-0.3}
            speed={isMobile ? 4 : 8}
            imageClassName='max-h-[324px] md:max-h-full'
          />
        </div>
        <div className='flex-1 md:pl-[75px]'>
          <SectionHead
            title='Prometheus NFT'
            description='Shape the future of gaming and experience the XBorg ecosystem to the fullest.'
          />

          <div className='mt-11 text-light100 font-black font-section tracking-widest text-2xl md:pl-6'>
            Exclusive Benefits
          </div>

          <ul className='text-light100 mt-3 list-disc ml-6 tracking-wider md:pl-6'>
            <Fade cascade damping={0.9} duration={500}>
              <li className='pt-1'>
                Vested $XBORG token airdrop at token generation event
              </li>

              <li className='pt-1'>
                Fee-less and early access to all XBorg products
              </li>

              <li className='pt-1'>XBorg DAO governance</li>

              <li className='pt-1'>Launchpad Premium</li>
            </Fade>
          </ul>

          <div className='mt-6 w-full md:pl-6 md:flex'>
            <ButtonSecondary label={"Buy Now"} />
          </div>
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
