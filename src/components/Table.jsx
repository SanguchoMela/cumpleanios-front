import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";

export default function Table({ urlActual, empleados = [] }) {
  const arrayLength = empleados.length

  const handleDelete = async (id) => {
    try {
      const confirmar = window.confirm(
        "Vas a eliminar a un empleado, ¿estás seguro de realizar esta acción?"
      );
      if (confirmar) {
        const jwt = localStorage.getItem("jwt");
        const url = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        };
        await axios.delete(url, options);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>N°</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Teléfono</th>
            {urlActual === "/dashboard/reporte" && (
              <th scope='col'>Edad</th>
            )}
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
              <td>{employee.phone}</td>
              <td>{employee.birthDate}</td>
              <td><MdDelete className='w-5 h-5 cursor-pointer' onClick={() => { handleDelete(employee.id) }} /></td>
            </tr>
          ))}
          {urlActual === "/dashboard/reporte" && empleados && empleados.map((employee, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.phone}</td>
              <td>{employee.age}</td>
              <td>{employee.dateBirth}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className='flex justify-center'>
        <span className='font-bold mr-3'>Total:</span> <span>{arrayLength}</span>
      </div>
    </>
  );
}
