import { useState } from 'react'

const FormFacture=(props)=>{
        const [ref,setRef]=useState()
        const [des,setDes]=useState()
        const [qte,setQte]=useState(0)
        const [prix,setPrix]=useState(0)

       
    return (
      <div>
     <h3>Liste des articles</h3>
       <table border="1">
        <thead>
        <tr>
          <th width="30px">Réf</th>
          <th width="40px">Désignation</th>
          <th width="25px">Qté</th>
          <th width="35px">Prix</th>
          <th width="40px">S/Total</th>
        </tr>
        </thead>
        <tbody>
      <tr>
       
       <td> <input type="text" 
        name="ref" 
        value={ref} 
        onChange={e => setRef(e.target.value)}
        size="2"/> 
        </td> 
       <td> <input type="text" 
       name="des" value={ des} 
       onChange={e => setDes(e.target.value)}
       size="11"/> </td>  
       <td> <input type="text" 
       name="qte" 
       value={qte} 
       onChange={e => setQte(e.target.value)} 
       size="2"/> </td> 
       <td> <input type="text" name="pr" 
       value={prix} 
       onChange={e => setPrix(e.target.value)}  size="2"/></td> 
       <td> <input type="text" 
       value={Number(prix)*Number(qte)} readOnly size="3"/> </td>
       </tr> 
       </tbody> 
      </table>
        <button onClick={()=>props.ajoutLigne(ref,des,qte,prix)}>
           Ajout ligne
        </button>
      </div>
    )
}
export default FormFacture
