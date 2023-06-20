import { Images } from "../../../assets/imgs/Images";
import { SingleTeamMemberType } from "../../../redux/aboutUs/types";

export const OurTeamMember = (data: SingleTeamMemberType) => {
  return (
    <div className='ml-4 mr-4 flex flex-col'>
      <img src={Images.team.member01} alt='' />
      <div className='mt-4 text-light100 text-sm'>{data.name}</div>
      <div className='mb-8 text-primary100 text-sm'>{data.role}</div>
    </div>
  );
};
