import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("currentUser");

    alert("Logged out successfully!");

    navigate("/login");
  }, [navigate]);

  return null;
}

export default Logout;
