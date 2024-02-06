import './style.css'

const Menu = (props) => {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active')
    }
    return (
        <>
            <header>
            <h1 className="titulo">{props.title}</h1>
            <div className='menu'>
            <a href="https://github.com/LeonardoRibeiro000" target="_blank">Projetos</a>
            <a href="https://www.linkedin.com/in/leonardo-ribeiro-5206b9166" target="_blank">Linkedin </a>
            <a href="https://api.whatsapp.com/send?phone=5585991599937&text=Olá,%20gostaria%20de%20contratar%20seus%20serviços!" target="_blank">Contato</a>
            </div>
            <div className='menu-toggle' onClick={toggleMenu}>
                &#9776;
            </div>
            
            </header>
        </>
            
            
    )
}

export default Menu