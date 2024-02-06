import Menu from './components/Menu'
import BoxText from './components/Box-text'
import Table from './components/Table'
import Form from './components/Form'
import './App.css'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div>
        <Menu title="IMC" subTitle="Índice de Massa Corporal"/>
        <BoxText text="O índice de massa corporal (IMC) é uma medida 
        internacional usada para calcular se uma pessoa
         está no peso ideal. Desenvolvido pelo polímata
          Lambert Quételet no fim do século XIX, trata-se
           de um método fácil e rápido para a avaliação 
           do nível de gordura de cada pessoa, sendo, 
           por isso, um preditor internacional de 
           obesidade adotado pela Organização Mundial da Saúde (OMS)."/>
           <Table/>          
           <Form/>   
           <Footer/>        
      </div>
      
      
    </>
  )
}

export default App
