import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Employees = () => {
  return (
    <>Employees
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'></th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </MDBTableBody>
      </MDBTable></>
  );
}

export default Employees;
