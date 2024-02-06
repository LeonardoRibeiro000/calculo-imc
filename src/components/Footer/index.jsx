import './style.css'

const Footer = () => {
    return (
        <div className="footer">
                <a href="https://github.com/LeonardoRibeiro000" target="_blank"> <img src="./codigo.png" className="image"></img></a>
                <a href="https://www.linkedin.com/in/leonardo-ribeiro-5206b9166" target="_blank"><img src="./linkedin.png" className="image" ></img></a>
                <a href="https://api.whatsapp.com/send?phone=5585991599937&text=Olá,%20gostaria%20de%20contratar%20seus%20serviços!" target="_blank"><img src="./whatsapp.png" className="image"></img></a>
                <p>&#169; 2024 Leonardo Ribeiro. Todos os direitos reservados</p>          
        </div>
    )
}

export default Footer