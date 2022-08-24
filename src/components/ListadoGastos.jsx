import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? "gastos": "no hay gastos aun"}</h2>

        {gastos.map( gasto=>(
            <Gastos
            key={gasto.id}
            gasto={gasto}
            / >  
        ))}
    
    </div>
  )
}

export default ListadoGastos