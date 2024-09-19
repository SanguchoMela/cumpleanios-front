import React from 'react';
import Form from '../components/Form';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
    return (
        <>
            <Link className='flex justify-start' to={"/dashboard/empleados"}>
                <MDBBtn className="mb-4 bg-orange-500 hover:bg-orange-600" size="md">Regresar</MDBBtn>
            </Link>
            <span className='font-bold text-xl'>Crear empleado</span>
            <Form />
        </>
    );
}

export default CreateEmployee;
