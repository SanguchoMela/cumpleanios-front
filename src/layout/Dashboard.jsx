import { useContext } from "react";
import {
  Link,
  Outlet,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const autenticado = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  return (
    <div className="flex min-h-screen">
      <nav className="mb-0 flex flex-col justify-between w-1/5 md:h-screen">
        <div>
          <div>
            <ul className="text-center mx-3 text-blanco">
              <li className="mt-6 mb-7">
                <Link
                  to="/dashboard"
                >
                  Calendario
                </Link>
              </li>
              <li className="mt-6 mb-7">
                <Link
                  to="/dashboard/empleados"
                >
                  Empleados
                </Link>
              </li>
              <li className="mt-6 mb-7">
                <Link
                  to="/dashboard/reporte"
                >
                  Reporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-3 mb-5 flex justify-between md:justify-end">
          <div className="m-2">
            <Link to="/"
            // onClick={handleLogout}
            >
              <button className="py-2 ml-3 flex items-center md:px-4 text-blanco font-semibold rounded-xl hover:shadow-lg hover:shadow-turquesa-fuerte">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                  />
                </svg>
                <span className="ml-3">Cerrar Sesión</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className="flex-1 flex-col justify-between h-screen">
        <div className="overflow-y-scroll px-8 h-5/6 flex flex-col justify-center">
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