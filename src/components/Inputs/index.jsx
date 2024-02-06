import './style.css'

const Input = (props) => {
    return (
        <>
            <label 
                htmlFor={props.for} 
                className={props.classLabel}>
                {props.nameLabel}
            </label>

            <input 
                type={props.type} 
                className={props.classInput} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}
                required={false}>
            </input>
        </>
        
    )
}

export default Input