import React from 'react'

export default function Autos({autos}) {
  return (
    <p>{autos.nombre}{autos.marca}{autos.año}{autos.color}</p>
  )
}
