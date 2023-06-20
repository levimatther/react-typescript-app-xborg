import { MouseParallaxContainer } from "react-parallax-mouse";
import { Images } from "../../../assets/imgs/Images";
import {
  ButtonSecondary,
  Container,
  ResponsiveParallaxLayer,
  SectionHead,
} from "../../../components";

export const BecomeXplorer = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <Container className='flex flex-col items-center justify-between flex-1 md:flex-row lg:pt-[111px] lg:pb-[80px] md:h-screen'>
        <div className='md:max-w-[530px] relative z-[2]'>
          <SectionHead
            title='Become An Xplorer'
            description='Love what we do? Join us! Pick up your Prometheus NFT to fully benefit from everything we have to offer.'
          />
          <div className='md:flex mt-6 md:pl-6 w-full'>
            <ButtonSecondary label='Buy Now' />
          </div>
        </div>
        <div className='h-[400px] w-screen border-b-[26px] mt-10 border-primary100 relative md:absolute md:bottom-0 md:right-0 md:w-[50%] xl:w-[53%] h-full xl:h-[90%] md:mt-0 md:border-none'>
          <ResponsiveParallaxLayer
            image={Images.smoke01}
            factorX={-0.2}
            factorY={-0.2}
            speed={5}
            imageClassName='h-full md:h-auto'
          />
          <ResponsiveParallaxLayer
            image={Images.smoke02}
            factorX={-0.1}
            factorY={-0.1}
            speed={0}
            imageClassName='h-full md:h-auto'
          />
          <ResponsiveParallaxLayer
            image={Images.logo01}
            factorX={-0.3}
            factorY={-0.3}
            speed={0}
            imageClassName='h-full md:h-auto'
          />
          <ResponsiveParallaxLayer
            image={Images.render3d_01}
            factorX={-0.4}
            factorY={0}
            speed={0}
            imageClassName='h-full md:h-auto'
          />
          <ResponsiveParallaxLayer
            image={Images.glow}
            factorX={0}
            factorY={0}
            speed={0}
            imageClassName='h-full md:h-auto'
          />
          <ResponsiveParallaxLayer
            image={Images.sparks01}
            factorX={-0.5}
            factorY={-0.5}
            speed={0}
            imageClassName='h-full md:h-auto'
          />
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
