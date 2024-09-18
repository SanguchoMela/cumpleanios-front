import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        birthDay: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`;
            const response = await axios.post(url, form);
            setTimeout(() => {
                navigate("/dashboard/empleados");
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <span>Ingresa los datos del empleado</span>
            <form onSubmit={handleSubmit} className="md:h-min h-4/5">
                <div className="flex justify-around gap-x-10 mx-6 flex-wrap md:flex-nowrap">
                    <div className="w-full">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="nombre">
                                Nombre
                            </label>
                            <input
                                className="py-2 pl-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
                                id="nombre"
                                type="text"
                                placeholder="Ingresa el nombre"
                                name="nombre"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-1">
                            <label className="text-sm font-semibold" htmlFor="apellido">
                                Apellido
                            </label>
                            <input
                                className="py-2 pl-2 w-full border border-turquesa-fuerte rounded-lg focus:outline-none focus:ring-1 focus:ring-turquesa-100"
                                id="apellido"
                                type="text"
                                placeholder="Ingresa el apellido"
                                name="apellido"
                                value={form.lastname || ""}
                                onChange={handleChange}
                            />
                        </div>
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
                                value={form.birthDay || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full">
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
                    <input
                        className="py-2 px-3 text-center text-sm font-semibold bg-blue-500 text-white rounded-xl hover:bg-blue-300 cursor-pointer"
                        type="submit"
                        value="Registrar"
                    />
                    <div
                        className="ml-3 px-3 py-2 text-sm md:px-4 text-white font-semibold bg-orange-500 hover:bg-orange-300 rounded-xl cursor-pointer"
                        onClick={() => navigate("/dashboard/empleados")}
                    >
                        Cancelar
                    </div>
                </div>
            </form>
        </>
    );
}