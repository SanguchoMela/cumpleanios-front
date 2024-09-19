import { useEffect, useState } from "react";

const Search = ({ empleados, setEmpleadosFiltrados, onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  useEffect(() => {
      const resultadosFiltrados = empleados.filter((empleado) => {
        const nombreMatch = empleado.name && empleado.name.toLowerCase().includes(search.toLowerCase());
        const apellidoMatch = empleado.lastName && empleado.lastName.toLowerCase().includes(search.toLowerCase());
        return nombreMatch || apellidoMatch;
      });
      setEmpleadosFiltrados(resultadosFiltrados);
  }, [search, empleados, setEmpleadosFiltrados]);

  return (
    <>
      <div className="mb-2 mt-1 flex justify-center">
        <input
          className="w-full py-2 pl-2 border rounded-lg"
          id="search"
          type="search"
          value={search}
          onChange={handleChange}
          placeholder="Buscar empleado por nombre o apellido"
          name="search"
        />
      </div>
    </>
  );
};

export default Search;