import React from 'react'
import psyduck from '../assets/psyduck.svg'

const EmptyResult = ({searchText}) => {
  return (
    <div style={{marginTop: "25px", }}>
        <p>No hay pokemones con el nombre: <span style={{fontWeight: 'bold'}}>{searchText}</span> </p>
        <img src={psyduck} alt="imagen de error de psyduck" />
    </div>
  )
}

export default EmptyResult