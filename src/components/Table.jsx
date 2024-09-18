import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function Table({ urlActual }) {
  const [employees, setEmployees] = useState([])

  const listarEmpleados = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      };
      const response = await axios.get(url, options);
      const empleados = response.data;
      console.log(empleados)
      setEmployees(empleados);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    listarEmpleados()
  }, [])

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
          {employees && employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope='row'>{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateBirth}</td>
              {urlActual === "/dashboard/empleados" && (
                <td><MdDelete /></td>
              )}
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable></>
  );
}
