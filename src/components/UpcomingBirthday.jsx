import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
} from 'mdb-react-ui-kit';
import axios from 'axios';
import moment from 'moment';

export default function UpcomingBirthday() {
    const [employees, setEmployees] = useState([])

    const upcomingBirthday = async () => {
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
            const empleados = response.data

            const today = moment()

            const upcomingEmployees = empleados.filter((employee) => {
                const birthDate = moment(employee.birthDate, "YYYY-MM-DD")
                const thisYearBirthday = birthDate.year(today.year())
                return thisYearBirthday.isBetween(today, today.clone().add(30, 'days'));
            })

            setEmployees(upcomingEmployees)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        upcomingBirthday()
    }, [])

    return (
        <MDBCard className='h-auto my-auto'>
            <MDBCardHeader className='font-bold'>{moment().format('MMMM')}</MDBCardHeader>
            <MDBCardBody>
                {employees.length > 0 ? (
                    employees.map((employee, index) => (
                        <MDBCardText key={index}>
                            {employee.name} {employee.lastName} - {moment(employee.birthDate).format('DD MMM')}
                        </MDBCardText>
                    ))
                ) : (
                    <MDBCardText>No hay cumpleaños en este mes</MDBCardText>
                )}
            </MDBCardBody>
        </MDBCard>
    )
}