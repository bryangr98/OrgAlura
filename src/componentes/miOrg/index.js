import "./MiOrg.css"

const MiOrg = (props) =>{
    //valor=true  !valor(se vueleve false)
    //Estados- hooks 
    //useState
    // const [nombreVariable , funcionAxctualiza] = useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = ()=>{
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="titulo"> Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg