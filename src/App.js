import "./App.css";
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/formulario/Formulario.js";
import MiOrg from "./componentes/miOrg";
import { useState } from "react";
import Equipo from "./componentes/equipo";
import Footer from "./componentes/footer";
import {v4 as uuid} from 'uuid'


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([
    {id:uuid(),
    equipo: "Programación",
    foto:'https://github.com/bryangr98.png' ,
    nombre: "Bryan",
    puesto: "Desarrollador",
    fav:true
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto:'https://github.com/bryangr98.png' ,
      nombre: "BryanS",
      puesto: "Desarrollador",
      fav:false
      },
      {
        id:uuid(),
        equipo: "FrntEnd",
        foto:'https://github.com/bryangr98.png' ,
        nombre: "BryanS",
        puesto: "Desarrollador",
        fav:false
        },
        {
          id:uuid(),
          equipo: "FrontEnd",
          foto:'https://github.com/bryangr98.png' ,
          nombre: "Bryan",
          puesto: "Desarrollador",
          fav:true
          },
          {
            id:uuid(),
            equipo: "Data Science",
            foto:'https://github.com/bryangr98.png' ,
            nombre: "Bryan",
            puesto: "Desarrollador",
            fav:true
            }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id:uuid(),
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id:uuid(),
      titulo: "Dev Ops",
      colorPrimario: "#ED66B69",
      colorSecundario: "#FDE7EB",
    },
    {
      id:uuid(),
      titulo: "Ux y Diseños",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id:uuid(),
      titulo: "Movíl",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && se MUestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  //crear equipo

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  };
  //Eliminar Colaborador
  const  eliminarColaborador = (id) => {
    console.log("Eliminar",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color 
  const actualizarColor = (color,id) => {
    console.log("Actualizar color:",color,id)
    const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
  }
    //crear Equipo
    const crearEquipo = (e) => {
      actualizarEquipos([...equipos, {...e,id:uuid()}])
    }
    const like = (id) => {
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />

      {mostrarFormulario === true ? (
        <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo} />
      ) : (
        <></>
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((data) => (
        <Equipo datos={data}
        key={data.titulo}
        colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === data.titulo)} 
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor} 
        like={like}/>
      ))}
      <Footer/>
    </div>
  );

}

export default App;
