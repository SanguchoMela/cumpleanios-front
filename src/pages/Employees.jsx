import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { Link, useLocation } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import Search from '../components/Search';
import axios from 'axios';

const Employees = () => {
  const location = useLocation()
  const urlActual = location.pathname

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
      <Link className='flex justify-end' to={"/dashboard/crear-empleado"}>
        <MDBBtn className="mb-4 bg-blue-500" size="md">Registrar empleado</MDBBtn>
      </Link>
      <Search />
      <Table urlActual={urlActual} empleados={employees} />
    </>
  );
}

export default Employees;
