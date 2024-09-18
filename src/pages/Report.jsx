import React from 'react';
import Table from '../components/Table';
import { useLocation } from 'react-router-dom';

const Report = () => {
  const location = useLocation()
  const urlActual = location.pathname
  return (
    <>
      <div className="mt-1 w-full flex justify-center mb-5">
        <label
          className="text-sm font-semibold mr-5"
          htmlFor="mes"
        >
          Selecciona un mes
        </label>
        <input
          className="p-2 border rounded-lg"
          id="fechaNacimiento"
          type="month"
          name="mes"
        />
      </div>
      <Table urlActual={urlActual} />
    </>
  );
}

export default Report;
