import './style.css'

const BoxText = (props) => {
    return (
        <div className='content'>
            <p>
                {props.text}
            </p>
        </div>
    )
}


export default BoxText