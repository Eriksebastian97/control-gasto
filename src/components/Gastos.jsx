import React from 'react'

const Gastos = ({gasto}) => {
  
  return (
    <div className='gasto-sombra'>
        <div className='contenido-gasto'>

            <div className='descripcion-gasto'>
             <p className='categoria'>
              {gasto.categoria}
             </p>
            </div>

        </div>
    </div>
  )
}

export default Gastos