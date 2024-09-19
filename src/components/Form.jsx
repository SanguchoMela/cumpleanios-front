import axios from "axios";
import { useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Form() {
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
            await axios.post(url, form, options);
            window.alert("Registro exitoso")
            setForm({})
        } catch (error) {
            console.log(error)
            window.alert("Error al registrar")
        }
    }

    return (
        <>
            <span className="my-3">Ingresa los datos del empleado</span>
            <form onSubmit={handleSubmit} className="mx-4">
                <div>
                    <div>
                        <label className="text-sm font-semibold" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            className="py-2 pl-2 w-full border rounded-lg focus:ring-1"
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
                            className="py-2 pl-2 w-full border rounded-lg focus:ring-1"
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
                            className="py-2 px-2 w-full border rounded-lg focus:ring-1"
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
                            className="py-2 pl-2 w-full border rounded-lg focus:ring-1"
                            id="email"
                            type="email"
                            placeholder="Ingresa el correo electrónico"
                            name="email"
                            value={form.email || ""}
                            onChange={handleChange}
                        />
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