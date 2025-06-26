import "../assets/styles/filtro.css";


const Filtro = ({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  tipoSeleccionado,
  setTipoSeleccionado,
}) => {
  const categorias = [
    { value: "mujer", label: "Mujer" },
    { value: "niña", label: "Niña" },
  ];

  const tipos = [
    { value: "remera", label: "Remera" },

    { value: "pantalón", label: "Pantalón" },
    { value: "cinturon", label: "Cinturón" },
    { value: "zapatos", label: "Zapatos" },
    { value: "accesorios", label: "Accesorios" },
  ];

  return (
    <div data-aos="fade-right" className="filtros">
      <div className="filtro-grupo">
        {categorias.map((cat) => (
          <button
            key={cat.value}
            className={`filtro-btn ${
              categoriaSeleccionada === cat.value ? "activo" : ""
            }`}
            onClick={() =>
              setCategoriaSeleccionada(
                categoriaSeleccionada === cat.value ? "" : cat.value
              )
            }
          >
            {cat.icon}
            <span className="catLabel">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="filtro-grupo">
        {tipos.map((tipo) => (
          <button
            key={tipo.value}
            className={`filtro-btn ${
              tipoSeleccionado === tipo.value ? "activo" : ""
            }`}
            onClick={() =>
              setTipoSeleccionado(
                tipoSeleccionado === tipo.value ? "" : tipo.value
              )
            }
          >
            {tipo.icon}
            <span className="catLabel">{tipo.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filtro;
