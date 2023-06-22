import React, { useState } from 'react'

const Fournisseur = () => {
    const [article,setArticle]=useState(41)
    const [prix,setPrix]=useState(2200)
    const modifier=()=>
    {
        setPrix(2500)

    }  
  return (
    <div>
      {article} <p>le montant de l'article est</p> {prix}
      <button onClick={()=>modifier()}>Modifier prix</button>
    </div>
  )
}

export default Fournisseur
