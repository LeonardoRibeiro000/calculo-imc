const Result = ({nome, imc, resultado}) => {
    const imcFloat = ((imc).toFixed(2))
    
    if(imcFloat < 17) {
        resultado = 'Muito abaixo do peso!'
      }else if(imcFloat >= 17 && imcFloat <= 18.49 ) {
        resultado = "Abaixo do peso!"
    }else if (imcFloat >= 18.50 && imcFloat <= 24.99 ){
        resultado =  "Peso normal!"
    }else if (imcFloat >= 25 && imcFloat <= 29.99 ){
        resultado =  "Acima do peso!"
    }else if (imcFloat >= 30 && imcFloat<= 34.99 ){
        resultado =  "Obesidade nível 1!"
    }else if (imcFloat >= 35 && imcFloat <= 39.99 ){
        resultado =  "Obesidade nível 2!"
    }else if (imcFloat > 40 ){
        resultado =  "Obesidade nível 3!"
    }else{
        resultado = "IMC inválido!"
    }
    return (
        <div>
            <p className="name">{nome}</p>
            <p>{`IMC: ${imcFloat}`}</p>
            <p>Resultado: {resultado}</p>

        </div>
    )
}

export default Result