'use client'

import { sort } from 'fast-sort'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Sper({feche}) {
    const [UrlParams,setUrlParams] = useState()
    const [order,setOrder] = useState()
    const [orders,setOrders] = useState([])
    const router = useRouter()
    useEffect(()=>{
      if(window!==undefined){
        setUrlParams(window.location.search)
      }
    })
    useEffect(()=>{
       if(UrlParams!==undefined){
        const Parames = new URLSearchParams(UrlParams)
        setOrder(Parames.get('order'))
        console.log(Parames.get('order'))
       }
    },[UrlParams])
    useEffect(()=>{
       if(order=='name'){
        console.log('kiiir')
       setOrders(sort(feche).asc(u=>u.name))
       }else{
        setOrders(sort(feche).asc(u=>u.email))
       }
    },[order])
    
    const mapo = orders.length>0?orders.map((el)=><div key={el.id}>{order=='name'?el.name:el.email}</div>):null
  return (
    <div >
      <button onClick={()=>router.push('/Decide')}>Back</button>
   {mapo}
    </div>
  )
}
