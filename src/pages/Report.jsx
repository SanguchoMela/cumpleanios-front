import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';
import { MDBBtn } from 'mdb-react-ui-kit';

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
  
  const generatePDF = () => {
    const doc = new jsPDF();
    const currentMonthBirthday = moment(monthEmployees[0].dateBirth).format('MMMM').toLowerCase()
    console.log(currentMonthBirthday)

    doc.text(`Empleados que cumplen años en ${currentMonthBirthday}`, 14, 22);

    const columns = [
      { header: "N°", dataKey: "id" },
      { header: "Nombre", dataKey: "name" },
      { header: "Apellido", dataKey: "last_name" },
      { header: "Teléfono", dataKey: "phone" },
      { header: "Fecha de Nacimiento", dataKey: "dateBirth" },
    ];

    const rows = monthEmployees.map((employee, index) => ({
      id: index + 1,
      name: employee.name,
      last_name: employee.last_name,
      phone: employee.phone,
      dateBirth: employee.dateBirth,
    }));

    doc.autoTable({
      columns: columns,
      body: rows,
      startY: 30,
    });

    doc.save(`${currentMonthBirthday}.pdf`);
  };

  useEffect(() => {
    listarEmpleadosMes(selectedMonth)
  }, [selectedMonth])

  return (
    <>
      <div className='mb-4 flex justify-end'>
        {monthEmployees.length > 0 && (
          <MDBBtn className="bg-orange-500 w-36 hover:bg-orange-600" onClick={generatePDF} size="md">Descargar PDF</MDBBtn>
        )}
      </div>
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
