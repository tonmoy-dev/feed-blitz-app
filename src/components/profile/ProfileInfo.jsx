import useProfile from "../../hooks/useProfile";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo() {
  const { state } = useProfile();

  const fullName = `${state?.user?.firstName} ${state?.user?.lastName}`;
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        {/*  profile image  */}
        <ProfileImage />

        {/*  name , email of user */}
        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {fullName}
          </h3>
          <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
        </div>

        {/*  bio  */}
        <Bio />

        {/* section divider */}
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  );
}
