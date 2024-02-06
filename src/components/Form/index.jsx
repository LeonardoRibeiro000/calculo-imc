import { useState} from 'react'
import './style.css'
import Button from '../Button'
import Input from '../Inputs'
import Result from '../Result'

const Form = () => {
    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('')
    const [mostrarResultado, setMostrarResultado] = useState(false)
    
    const handleCalcular = () => {
       
        console.log('handleCalcular foi chamado')
        console.log('Nome: ',nome);
        console.log('Altura: ',altura);
        console.log('Peso: ',peso)
        console.log('-------------------------------')
        setMostrarResultado(true)
    }

    const limpar = () => {
        setNome("")
        setAltura("")
        setPeso("")
        setMostrarResultado(false)
    }
    return (
        <div className='form-container'>
            <div className="form-title">
                <p>Preencha os campos conforme solicitado.</p>
            </div> 
             <div className='form'>
                <form className="formulario" id="some-form">
                    <Input
                        for="nome"
                        classLabel="label"
                        nameLabel="Nome"
                        type="text"
                        classInput="input"
                        id="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}

                    />
                    <Input
                        for="altura"
                        classLabel="label"
                        nameLabel="Altura"
                        type="number"
                        classInput="input"
                        id="altura"
                        placeholder="Digite sua altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        

                    />
                    <Input
                        for="peso"
                        classLabel="label"
                        nameLabel="Peso"
                        type="number"
                        classInput="input"
                        id="peso"
                        placeholder="Digite seu peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}

                    />
                     
                </form>

                <div> 
                    <Button 
                        type="submit"
                        class="btn"  
                        name="Calcular"
                        onClick={() => handleCalcular()}
                    />
                            
                    <Button  
                        type='submit'
                        class="btn"  
                        name="Limpar"
                        onClick={() => limpar()}
                            
                    />    

                </div> 
                    
                
                    {mostrarResultado && (
                        <div className='resultado'>
                         <Result
                                nome={nome}
                                imc={peso / parseFloat(altura * altura)}
                                
                                />
                                </div>
                )}
                
                
               
                                    
            </div> 
        </div>
        
    )
}
export default Form