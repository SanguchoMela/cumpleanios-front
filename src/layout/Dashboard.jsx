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
              <button className="py-2 ml-3 flex items-center md:px-4 text-black font-semibold rounded-xl hover:shadow-lg hover:bg-blue-400">
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
