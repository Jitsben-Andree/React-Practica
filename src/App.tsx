
import { useEffect, useState } from 'react'
import './App.css'
import axios, { Axios } from 'axios'

function App() {

  const [cripto,setCripto]=useState([])
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(()=>{
    axios.get(`${API_URL}tickers/`)
    .then((data)=>{

      console.log(data)

      setCripto(data.data.data)
    })
    .catch(
      ()=>{
        console.error("la peticion fallo")
      }
    )
  },[])

  if(cripto.length ==0) return <span> <h1>cargando</h1> </span> 


  return (
    <>
      <h1>lista de criptopmonedas Criptomoneda</h1>

      <ol>
        {
        cripto.map(({id,name, price_usd})=>(
          <li key={id}>Nombre {name} price: {price_usd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
