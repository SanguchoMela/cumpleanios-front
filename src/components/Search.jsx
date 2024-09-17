import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mb-2 mt-1 flex justify-center">
        <input
          className="w-full py-2 pl-2 border rounded-lg"
          id="buscador"
          type="search"
          placeholder="Buscar empleado"
          name="buscador"
        />
      </div>
    </>
  );
};

export default Search;