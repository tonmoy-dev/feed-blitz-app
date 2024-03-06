import EditIcon from "../../assets/icons/edit.svg";
import useProfile from "../../hooks/useProfile";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL; // base url

export default function ProfileImage() {
  const { state } = useProfile();
  const fullName = `${state?.user?.firstName} ${state?.user?.lastName}`;

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full h-48 rounded-full"
        src={`${baseUrl}/${state?.user?.avatar}`}
        alt={fullName}
      />

      <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
        <img src={EditIcon} alt="Edit" />
      </button>
    </div>
  );
}
