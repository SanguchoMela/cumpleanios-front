import {
  Link,
  Navigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

const Dashboard = () => {
  const autenticado = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
  };

  return (
    <div className="flex min-h-screen">
      <nav className="flex flex-col justify-around w-1/5 bg-blue-500 h-screen text-center">
        <NavLink to="/dashboard/calendar" className="mt-5" >
          {({ isActive }) => (
            <span className={isActive ? "bg-blue-700 text-white p-3 rounded-lg" : "mt-5 hover:bg-blue-700 hover:shadow-lg p-3 rounded-lg text-white"}>Calendario</span>
          )}
        </NavLink>
        <NavLink to="/dashboard/empleados" >
          {({ isActive }) => (
            <span className={isActive ? "bg-blue-700 text-white p-3 rounded-lg" : "mt-5 hover:bg-blue-700 hover:shadow-lg p-3 rounded-lg text-white"}>Empleados</span>
          )}
        </NavLink>
        <NavLink to="/dashboard/reporte" >
          {({ isActive }) => (
            <span className={isActive ? "bg-blue-700 text-white p-3 rounded-lg" : "mt-5 hover:bg-blue-700 hover:shadow-lg p-3 rounded-lg text-white"}>Reporte</span>
          )}
        </NavLink>
        <div className="flex justify-center">
          <div className="mb-3">
            <Link to="/" onClick={handleLogout}>
              <MDBBtn className="bg-orange-500 hover:bg-orange-600" size="lg" onClick={handleLogout}>Cerrar sesión</MDBBtn>
            </Link>
          </div>
        </div>
      </nav>
      <section className="flex-1 flex-col justify-between h-screen">
        <div className="m-9 h-5/6 flex flex-col justify-center">
          {autenticado ?
            <Outlet />
            : <Navigate to="/" />}
        </div>
        <footer className="h-10">
          <p className="text-sm text-center font-medium text-turquesa-fuerte leading-[3.6rem]">
            Todos los derechos reservados
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Dashboard;
