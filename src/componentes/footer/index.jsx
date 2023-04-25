import './footer.css'

const Footer =()=>{
    return <footer className='footer' style={{backgroundImage: 'url(/img/header.png )'}}
    >
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src ='/img/twitter.png' alt = 'twitter'/>'
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src='/img/instagram.png' alt = 'instagram'/>
                </a>
        </div>
        <img src= '/img/Logo.png' alt = 'logo'/>
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer