import React from 'react'

export default function page() {
  const {createPool} = require('mysql')
  const pool  = createPool({
      host:"localhost",
      user:"root",
      password:"password",
      connectionLimit:10
  })
 pool.query(`select * from sql_invoicing.clients`,(err,res)=>{
  return console.log(res)
 })
  return (
    <div>
      
    </div>
  )
}




