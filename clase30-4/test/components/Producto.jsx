import React from 'react'

export default function Producto({nombre, precio, imagen}) {
  return (
    <div>
        <h2>{nombre} {precio}</h2>
        <img src="imagen" alt="" />
    </div>
  )
}
