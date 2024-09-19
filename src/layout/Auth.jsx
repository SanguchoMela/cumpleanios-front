import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const autenticado = localStorage.getItem("jwt");

  return (
    <div className="flex justify-center content-center">
      {autenticado ? <Navigate to="/dashboard" /> :
        <Outlet />
      }
    </div>
  );
};

export default Auth;