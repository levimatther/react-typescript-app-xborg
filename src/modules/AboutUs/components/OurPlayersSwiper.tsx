import { Images } from "../../../assets/imgs/Images";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../reducer";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SinglePlayerType } from "../../../redux/aboutUs/types";

export const OurPlayersSwiper = () => {
  const { players } = useSelector((state: GlobalState) => state.aboutUs);
  return (
    <div className='w-[320px] xl:w-[420px] relative xl:px-[50px]'>
      <a
        href='#'
        className='swiper-prev absolute left-[10px] z-[2] 
        md:left-[0px] 
        xl:left-[-7px] top-[190px]'
      >
        <img src={Images.chevron_left.default} />
      </a>
      <a
        href='#'
        className='swiper-next absolute right-[10px] z-[2] 
        md:right-[0px] 
        xl:right-[-7px] top-[190px]'
      >
        <img src={Images.chevron_right.default} />
      </a>
      <Swiper
        parallax
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className='w-full'
        centeredSlides
        speed={1500}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
      >
        {players.map((player: SinglePlayerType, index: number) => (
          <SwiperSlide key={index} className='flex flex-col'>
            <img src={Images.players.member01} alt={player.name} />{" "}
            <div className='font-section text-2xl mt-12 text-primary100'>
              {player.name}
            </div>
            <div className='text-light100 text-sm leading-[26px] font-normal tracking-wider md:leading-7 md:text-base'>
              {player.description}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-pagination z-[2] bottom-auto top-[412px] left-[50px] right-[50px]' />
    </div>
  );
};
