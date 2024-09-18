import React from 'react';
import Table from '../components/Table';

const Report = () => {
  return (
    <>
      <div className="mt-1">
        <label
          className="text-sm font-semibold"
          htmlFor="fechaNacimiento"
        >
          Fecha de nacimiento
        </label>
        <input
          className="py-2 px-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
          id="fechaNacimiento"
          type="date"
          name="fechaNacimiento"
        />
      </div>
      <Table />
    </>
  );
}

export default Report;
