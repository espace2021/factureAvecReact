import { useState,useCallback } from 'react'

const FormFacture=(props)=>{
        const [ref,setRef]=useState('')
        const [des,setDes]=useState('')
        const [qte,setQte]=useState(0)
        const [prix,setPrix]=useState(0)
      
        const validerLigne= useCallback(() => {
          props.ajoutLigne(ref,des,qte,prix);
          setRef("")
          setDes("")
          setQte("")
          setPrix("")
        },[ref,des,qte,prix]);

    return (
      <div>
    
       <table border="1">
    
        <tbody>
      <tr>
       
       <td> <input type="text" 
        name="ref" 
        value={ref} 
        onChange={e => setRef(e.target.value)}
        size="1"/> 
        </td> 
       <td> <input type="text" 
       name="des" value={ des} 
       onChange={e => setDes(e.target.value)}
       size="12"/> </td>  
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
        <button onClick={()=>validerLigne()}>
           Ajout ligne
        </button>
      </div>
    )
}
export default FormFacture
