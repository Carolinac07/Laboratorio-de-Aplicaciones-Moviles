import React from 'react'

export default function Saludar({nombre, apellido, edad}) {
  return (
    <h2 className='frase'>Hola soy {nombre} {apellido} y tengo {edad} años.</h2>
  )
}
