import { Fade } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { Container, SectionHead } from "../../../components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../reducer";
import { OurPlayersSwiper } from "./OurPlayersSwiper";

export type OurPlayersType = {
  isMobile: boolean;
};

export const OurPlayers = ({ isMobile }: OurPlayersType) => {
  const { tournamentsWon, tournamentWinning } = useSelector(
    (state: GlobalState) => state.aboutUs,
  );
  return (
    <Container className='flex items-center justify-between flex-col md:flex-row'>
      <div className='flex-1 max-w-[540px] md:mr-[50px]'>
        <SectionHead
          title='Meet Our Players'
          description='We compete at the highest level across the most competitive games Web3 has to offer.'
        />
        <Parallax speed={isMobile ? 0 : 4} opacity={[0, 3]}>
          <div className='flex w-full mt-6 md:mt-11'>
            <Fade
              cascade
              damping={0.9}
              duration={500}
              className='flex flex-col flex-1'
            >
              <div>
                <div className='font-normal text-primary100 text-2xl tracking-widest md:text-[32px] md:font-medium md:tracking-[0.2rem]'>
                  {tournamentsWon}
                </div>
                <div
                  className='text-sm md:text-base text-light100 mt-2 md:mt-3 tracking-wider leading-[24px] md:leading-[28px]'
                  style={{
                    wordSpacing: "9999999px",
                  }}
                >
                  Tournaments Won
                </div>
              </div>
              <div>
                <div className='font-normal text-primary100 text-2xl tracking-widest md:text-[32px] md:font-medium md:tracking-[0.2rem]'>
                  ${tournamentWinning.toLocaleString()}
                </div>

                <div
                  className='text-sm md:text-base text-light100 mt-2 md:mt-3 tracking-wider leading-[24px] md:leading-[28px]'
                  style={{
                    wordSpacing: "9999999px",
                  }}
                >
                  Tournament Winnings
                </div>
              </div>
            </Fade>
          </div>
        </Parallax>
      </div>
      <div className='flex-1 flex md:justify-end xl:justify-center xl:items-center mt-5'>
        <OurPlayersSwiper />
      </div>
    </Container>
  );
};
