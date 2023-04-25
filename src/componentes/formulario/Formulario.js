import { useState } from "react";
import "./Formulario.css";
import Campo from "../campo";
import ListaOpciones from "../listaopciones";
import Boton from "../boton";

const Formulario = (props) => {
  const [nombre, actualizarnombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");
  const [id, actualizarId] = useState("");

  const { registrarColaborador , crearEquipo} = props
  //crear equipo
  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo,colorPrimario:color})
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
      id
    };
    registrarColaborador(datosAEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarnombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          requiered
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo "
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type='color'
          
        />
        <Boton>Registrar Equipo</Boton>
        </form>
    </section>
  );
};

export default Formulario;
