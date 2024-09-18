import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";

export default function Table({ urlActual }) {
  return (
    <>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>N°</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            {urlActual === "/dashboard/empleados" && (
              <th scope='col'>Fecha de nacimiento</th>
            )}
            <th scope='col'>Opciones</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            {urlActual === "/dashboard/empleados" && (
              <td>@mdo</td>
            )}
            <td><MdDelete /></td>
          </tr>
        </MDBTableBody>
      </MDBTable></>
  );
}
