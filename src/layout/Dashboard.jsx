import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

const Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const autenticado = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setAuth(null);
  };

  return (
    <div className="flex min-h-screen">
      <nav className="flex flex-col justify-between w-1/5 bg-blue-500 h-screen">
        <div>
          <ul className="text-center text-black">
            <Link to="/dashboard" className="text-black hover:text-black">
              <li className="mt-5 hover:bg-blue-400 hover:shadow-lg py-2">
                Calendario
              </li>
            </Link>
            <Link
              to="/dashboard/empleados"
              className="text-black hover:text-black"
            >
              <li className="my-5 hover:bg-blue-400 hover:shadow-lg py-2">
                Empleados
              </li>
            </Link>
            <Link
              to="/dashboard/reporte"
              className="text-black hover:text-black"
            >
              <li className="hover:bg-blue-400 hover:shadow-lg py-2">
                Reporte
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="mb-3">
            <Link to="/" onClick={handleLogout}>
              <MDBBtn className="bg-orange-500" size="lg" onClick={handleLogout}>Cerrar sesión</MDBBtn>
            </Link>
          </div>
        </div>
      </nav>
      <section className="flex-1 flex-col justify-between h-screen">
        <div className="overflow-y-scroll m-9 h-5/6 flex flex-col justify-center">
          {/* {autenticado ?  */}
          <Outlet />
          {/* : <Navigate to="/inicioSesion" />} */}
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
