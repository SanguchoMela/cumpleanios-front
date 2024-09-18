import React from 'react';
import Table from '../components/Table';
import { Link, useLocation } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import Search from '../components/Search';

const Employees = () => {
  const location = useLocation()
  const urlActual = location.pathname
  return (
    <>
      <Link className='flex justify-end' to={"/dashboard/crear-empleado"}>
        <MDBBtn className="mb-4 bg-blue-500" size="md">Crear empleado</MDBBtn>
      </Link>
      <Search/>
      <Table urlActual={urlActual} />
    </>
  );
}

export default Employees;
