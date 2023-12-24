import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the authentication token or perform any other logout-related actions
    // For example, if using localStorage for authentication token:
    localStorage.removeItem("authToken");

    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default LogoutPage;
