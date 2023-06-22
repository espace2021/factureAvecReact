import React, { useState } from 'react'

const Client = () => {
    const [nom,setNom]=useState("Mohamed")
    const [tele,setTel]=useState("29855555")
    const modifier=()=>
    {
       setTel("98525555")

    }  
  return (
    <div>
      {nom} <p>le nom  est</p> {tele}
      <button onClick={()=>modifier()}>Modifier tel</button>
    </div>
  )
}

export default Client
