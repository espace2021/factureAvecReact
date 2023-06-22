import React, { useState } from 'react'

const Personnes = () => {

const [data,setData]=useState([
    {
        "id":"100",
        "nom":"Mohamed Ali",
        "age":"33",
    },
    {
        "id":"101",
        "nom":"Abbes",
        "age":"42"
    },
    {
        "id":"102",
        "nom":"Souhaila",
        "age":"29"
    },
    {
        "id":"103",
        "nom":"Asma",
        "age":"18"
    }
]
)




  return (
    <div>
      {data.map((person ,i)=>
                <h1>id:{person.id} Nom:{person.nom} Age:{person.age}</h1>
                
        )}

    </div>
  )
}

export default Personnes
