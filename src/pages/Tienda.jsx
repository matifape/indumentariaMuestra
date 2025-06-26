import { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";
import "../assets/styles/tienda.css";
import SliderMarcas from "../components/Slider";
import Filtro from "../components/Filtro";
import Footer from "../components/Footer";
import Pruebaheader from "../components/Pruebaheader";
import Pruebahero from "../components/Pruebahero";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Tienda() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const productosPorPagina = 6;
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaSeleccionada, tipoSeleccionado]);

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      !categoriaSeleccionada || producto.categoria === categoriaSeleccionada;
    const coincideTipo =
      !tipoSeleccionado || producto.tipo === tipoSeleccionado;
    return coincideCategoria && coincideTipo;
  });

  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;
  const productosVisibles = productosFiltrados.slice(
    indiceInicial,
    indiceFinal
  );
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  return (
    <div>
      <Pruebaheader />
      <Pruebahero />
      <Filtro
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        tipoSeleccionado={tipoSeleccionado}
        setTipoSeleccionado={setTipoSeleccionado}
      />
      <SliderMarcas />
      <div
      data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      
      className="cardContainer">
        {productosFiltrados.length === 0 ? (
          <p className="mensaje-sin-productos">
            No hay productos que coincidan con los filtros seleccionados.
          </p>
        ) : (
          productosVisibles.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        )}
      </div>

      <div className="paginacion">
        {[...Array(totalPaginas)].map((_, i) => (
          <button
            key={i}
            className={`${paginaActual === i + 1 ? "activo" : ""}`}
            onClick={() => setPaginaActual(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
