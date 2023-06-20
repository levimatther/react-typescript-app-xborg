import { Images } from "../../../assets/imgs/Images";
import { Container, SectionHead } from "../../../components";

export const Partners = () => {
  return (
    <Container className='flex flex-col lg:flex-row'>
      <div className='flex-1 max-w-[587px]'>
        <SectionHead title='Our Partners' />

        <div className='flex flex-wrap mt-6'>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner02} alt='' />
          </div>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner03} alt='' />
          </div>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner04} alt='' />
          </div>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner06} alt='' />
          </div>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner05} alt='' />
          </div>
          <div className='flex-50 mb-4.5 flex items-center justify-center md:flex-33.333 mt-1.5 mb-3.5'>
            <img src={Images.partners.partner07} alt='' />
          </div>
        </div>
      </div>
      <div className='flex-1 relative flex max-w-[480px] mt-12'>
        <SectionHead
          title='SwissBorg'
          description='XBorg is powered by SwissBorg, a Swiss crypto app revolutionizing wealth management.'
        />
        <img
          src={Images.partners.partner01}
          alt=''
          className='w-[73px] absolute right-0 top-[35px] md:w-[103px] md:top-[-25px]'
        />
      </div>
    </Container>
  );
};
