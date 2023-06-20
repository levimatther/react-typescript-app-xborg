import { Link } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";

export const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center pr-11 py-8 md:pt-4 md:pb-10 md:fixed md:bottom-0 md:right-0 md:justify-end'>
      <Link to='http://twitter.com/' className='pl-5'>
        <img src={Images.socials.twitter.default} alt='twitter' />
      </Link>
      <Link to='http://discord.com/' className='pl-5'>
        <img src={Images.socials.discord.default} alt='discord' />
      </Link>
      <Link to='http://twitch.com/' className='pl-5'>
        <img src={Images.socials.twitch.default} alt='twitch' />
      </Link>
    </footer>
  );
};
