
import React from 'react'
import Sper from './Sper'

export default async function clien() {
   const Datau =await fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    console.log(Datau)
    
  return (
    <div>
      <Sper feche={Datau}/>
    
    </div>
  )
}
