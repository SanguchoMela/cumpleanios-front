import React from 'react';
import Table from '../components/Table';
import { useLocation } from 'react-router-dom';

const Employees = () => {
  const location = useLocation()
  const urlActual = location.pathname
  return (
    <Table urlActual={urlActual}/>
  );
}

export default Employees;
