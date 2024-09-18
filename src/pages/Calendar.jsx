import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario';
import axios from 'axios';
import moment from 'moment';

export default function Calendar() {
  const [events, setEvents] = useState([]);

  const showBirth = async () => {
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
      console.log(empleados)

      const eventsFormat = empleados
        .map((empleado, index) => {
          if (empleado.birthDate) {
            const birthDate = moment(empleado.birthDate);
            const currentYear = moment().year();

            const adjustedBirthDate = birthDate.year(currentYear).startOf('day');

            return {
              id: index,
              title: `${empleado.name} ${empleado.lastName}`,
              start: adjustedBirthDate.toDate(),
              end: adjustedBirthDate.toDate(),
            };
          } else {
            console.log("Error de formato");
            return null;
          }
        })
      console.log(eventsFormat)
      setEvents(eventsFormat)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showBirth()
  }, [])

  return (
    <Calendario events={events} />
  );
}
