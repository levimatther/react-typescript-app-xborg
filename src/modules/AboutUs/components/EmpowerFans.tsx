import { MouseParallaxContainer } from "react-parallax-mouse";
import { Images } from "../../../assets/imgs/Images";
import {
  Container,
  ResponsiveParallaxLayer,
  SectionHead,
} from "../../../components";

export type EmpowerFansType = {
  isMobile: boolean;
};

export const EmpowerFans = ({ isMobile }: EmpowerFansType) => {
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
        <div className='md:flex-1 relative w-full md:max-w-[480px] h-[320px] mt-6 md:mt-0 md:max-h-full md:h-full'>
          <ResponsiveParallaxLayer
            image={Images.confetti}
            factorX={-0.6}
            factorY={-0.6}
            speed={0}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.megaphone}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 5 : 20}
            imageClassName='max-h-[324px] md:max-h-full'
          />
        </div>
        <div className='flex flex-col flex-1 max-w-[555px] pr-2.5'>
          <SectionHead
            title='We Empower Fans'
            description='We believe that fans should be able to invest in esports teams, vote on key decisions, and earn from their contributions.'
          />
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
