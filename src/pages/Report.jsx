import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Report = () => {
  const location = useLocation()
  const urlActual = location.pathname

  const [selectedMonth, setSelectedMonth] = useState("")

  const [monthEmployees, setMonthEmployees] = useState([])

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const listarEmpleadosMes = async (month) => {
    try {
      const jwt = localStorage.getItem("jwt");
      const url = `${import.meta.env.VITE_BACKEND_URL}/users/birthday`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        params: {
          month: month,
        },
      };
      const response = await axios.get(url, options);
      const empleados = response.data;
      console.log(empleados)
      setMonthEmployees(empleados);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listarEmpleadosMes(selectedMonth)
  }, [selectedMonth])

  return (
    <>
      <div className="mt-1 w-full flex justify-center mb-5">
        <label
          className="text-sm font-semibold mr-5"
          htmlFor="month"
        >
          Selecciona un mes
        </label>
        <input
          className="p-2 border rounded-lg"
          id="month"
          type="month"
          name="month"
          value={selectedMonth}
          onChange={handleMonthChange}
        />
      </div>
      <Table urlActual={urlActual} empleados={monthEmployees} />
    </>
  );
}

export default Report;
