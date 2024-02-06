import './style.css'

const Button = (props) => {
    return  <button  
                tyoe={props.type}
                className={props.class} 
                onClick={props.onClick}
                >
                {props.name}
            </button>        
}

export default Button