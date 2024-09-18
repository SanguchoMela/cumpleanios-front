import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";

export default function Table({ urlActual, empleados }) {
  return (
    <>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>N°</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Fecha de nacimiento</th>
            {urlActual === "/dashboard/empleados" && (
              <th scope='col'>Opciones</th>
            )}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {urlActual === "/dashboard/empleados" && empleados && empleados.map((employee, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.birthDate}</td>
              <td><MdDelete /></td>
            </tr>
          ))}
          {urlActual === "/dashboard/reporte" && empleados && empleados.map((employee, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.dateBirth}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable></>
  );
}
