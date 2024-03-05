import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate(); // navigation

  // handling logout button
  const handleLogout = () => {
    navigate("/login"); // navigate to login page
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
