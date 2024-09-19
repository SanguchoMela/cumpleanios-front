import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';

export default function Table({ urlActual, empleados = [] }) {
  const arrayLength = empleados.length

  const handleDelete = async (id) => {
    try {
      const confirmar = window.confirm(
        "Vas a eliminar a un empleado, ¿estás seguro de realizar esta acción?"
      );
      if (confirmar) {
        const jwt = localStorage.getItem("jwt");
        const url = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        };
        await axios.delete(url, options);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF();
    const currentMonth = moment().format('MMMM').toLowerCase()

    doc.text("Lista de Empleados", 14, 22);

    const columns = [
      { header: "N°", dataKey: "numero" },
      { header: "Nombre", dataKey: "name" },
      { header: "Apellido", dataKey: "last_name" },
      { header: "Teléfono", dataKey: "phone" },
      { header: "Fecha de Nacimiento", dataKey: "dateBirth" },
    ];

    const rows = empleados.map((employee, index) => ({
      numero: index + 1,
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

    doc.save(`${currentMonth}.pdf`);
  };

  return (
    <>
      <div className='mb-4 flex justify-end'>
        {urlActual === "/dashboard/reporte" && arrayLength > 0 && (
          <MDBBtn className="bg-orange-500 w-36 hover:bg-orange-600" onClick={generatePDF} size="md">Descargar PDF</MDBBtn>
        )}
      </div>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>N°</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Teléfono</th>
            <th scope='col'>Fecha de nacimiento</th>
            {urlActual === "/dashboard/empleados" && (
              <th scope='col'>Opciones</th>
            )}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {urlActual === "/dashboard/empleados" && empleados && empleados.map((employee, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.phone}</td>
              <td>{employee.birthDate}</td>
              <td><MdDelete className='w-5 h-5 cursor-pointer' onClick={() => { handleDelete(employee.id) }} /></td>
            </tr>
          ))}
          {urlActual === "/dashboard/reporte" && empleados && empleados.map((employee, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.phone}</td>
              <td>{employee.dateBirth}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className='flex justify-center'>
        <span className='font-bold mr-3'>Total:</span> <span>{arrayLength}</span>
      </div>
    </>
  );
}
