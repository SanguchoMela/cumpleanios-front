import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Search from '../components/Search';

export default function Table({page}) {
  return (
    <>
    <Search/>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>Identificación</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Fecha de nacimiento</th>
            <th scope='col'>Opciones</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </MDBTableBody>
      </MDBTable></>
  );
}
