import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);


   const [modal,setModal] = useState(false)
   const [animarModal , setAnimarModal] = useState(false)
   
   const[gastos, setGastos] = useState([])

  const handleNuevoGasto = ()=>{
    setModal(true)

    setTimeout(()=>{
     setAnimarModal(true)

    }, 500)
  }

const guardarGastos = gasto =>{
  gasto.id = generarId()
  setGastos([...gastos,gasto])

  setModal(false)
  setAnimarModal(false)

  setTimeout(()=>{
      setModal(false)
  },500)

}

  return ( 
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto &&(
      <>
        <main>
        <ListadoGastos
        gastos={gastos}
        /> 
        </main>
     

       <div className="nuevo-gasto">
        <img src={IconoNuevoGasto} 
        alt="icono nuevo gasto" 
        onClick={handleNuevoGasto}
        />
      </div>
      </>
      )}

      {modal && <Modal 
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGastos={guardarGastos}

      />}
      
    </div>
  );
}

export default App;
