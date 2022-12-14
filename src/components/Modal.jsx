import { useState } from "react"
import Mensaje from "./Mensaje"
import CerrarBTN from "../img/cerrar.svg"

const Modal = ({setModal, animarModal,setAnimarModal,guardarGastos}) => {

  const [mensaje,setMensaje] = useState("")
   const [nombre, setNombre] = useState("")
   const [cantidad, setCantidad] = useState("")
   const[categoria, setCategoria] = useState("")

  const ocultarModal = ()=>{
   setModal(false)
   setAnimarModal(false)

   setTimeout(()=>{
       setModal(false)
   },500)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
   

    if([nombre,cantidad,categoria].includes("")){
      setMensaje("todos los campos son obligatorios")

       setTimeout(()=>{ 
        setMensaje("")

       },3000);
      
      return
    }

    guardarGastos({nombre,cantidad,categoria})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
        src={CerrarBTN}
        alt="cerrar modal"
        onClick={ocultarModal}
        />

      </div>
      
      <form
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : "cerrar"} `}>
        <legend>Nuevo gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input 
          id="nombre"
          type="text"
          placeholder="añade el nombre del gasto"
          value={nombre}
          onChange={e=>setNombre(e.target.value)}


          
          />

        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input 
          id="cantidad"
          type="number"
          placeholder="añade la cantidad del gasto : ej. 300 "
          value={cantidad}
          onChange={e=>setCantidad(Number(e.target.value))}

          
          />

        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

         <select 
         id="categoria"
         value={categoria}
         onChange={e=>setCategoria(e.target.value)}

         >

          <option value="">--Seleccione</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="ocio">Ocio</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>



         </select>

        

        </div>

        <input
        type="submit"
        value="añadir gasto"
        
        
        />




      </form>

    </div>
  )
}

export default Modal