import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate(); // navigation

  // handling logout button
  const handleLogout = () => {
    setAuth({}); // reset the auth info
    navigate("/login"); // navigate to login page
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
