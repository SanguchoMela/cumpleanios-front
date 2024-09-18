import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Form() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        birthDate: "",
        email: "",
    })

    const handleChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jwt = localStorage.getItem("jwt")
            const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
            const options = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${jwt}`,
                },
              };
            const response = await axios.post(url, form, options);
            window.alert("Registro exitoso")
        } catch (error) {
            console.log(error)
            window.alert("Error al registrar")
        }
    }

    return (
        <>
            <span>Ingresa los datos del empleado</span>
            <form onSubmit={handleSubmit} className="md:h-min h-4/5">
                <div className="flex justify-around gap-x-10 mx-6 flex-wrap md:flex-nowrap">
                    <div className="w-full">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="name">
                                Nombre
                            </label>
                            <input
                                className="py-2 pl-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
                                id="name"
                                type="text"
                                placeholder="Ingresa el nombre"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-1">
                            <label className="text-sm font-semibold" htmlFor="lastName">
                                Apellido
                            </label>
                            <input
                                className="py-2 pl-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
                                id="lastName"
                                type="text"
                                placeholder="Ingresa el apellido"
                                name="lastName"
                                value={form.lastName || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-1">
                            <label
                                className="text-sm font-semibold"
                                htmlFor="birthDate"
                            >
                                Fecha de nacimiento
                            </label>
                            <input
                                className="py-2 px-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
                                id="birthDate"
                                type="date"
                                name="birthDate"
                                value={form.birthDate || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                className="py-2 pl-2 w-full border rounded-lg focus:outline-none focus:ring-1"
                                id="email"
                                type="email"
                                placeholder="Ingresa el correo electrónico"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="m-6 flex justify-end">
                    <MDBBtn type="submit" className="mr-4 bg-blue-500" size="sm">Registrar</MDBBtn>
                    <MDBBtn className="bg-orange-500 hover:bg-orange-600" size="sm">Cancelar</MDBBtn>
                </div>
            </form>
        </>
    );
}