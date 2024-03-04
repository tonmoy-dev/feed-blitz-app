import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import Avatar from "../../assets/images/avatars/avatar.jpg";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/*  Logo  */}
        <Link to="/">
          <img
            width="50px"
            className="max-w-[100px] rounded-full lg:max-w-[130px] inline"
            src={Logo}
          />
        </Link>

        {/* nav links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>
          <button className="icon-btn">
            <img src={LogoutIcon} alt="Logout" />
          </button>

          <button className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">Rx</span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={Avatar}
              alt="Avatar"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
