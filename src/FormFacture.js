import { useState,useEffect } from 'react'

const FormFacture=(props)=>{
  
        const [ref,setRef]=useState("")
        const [des,setDes]=useState("")
        const [qte,setQte]=useState(0)
        const [prix,setPrix]=useState(0)
 
        const validerLigne= () => {
         if(textBouton ==="Ajout ligne") props.ajoutLigne(ref,des,qte,prix);
         if(textBouton ==="Modification ligne") props.modifLigne(ref,des,qte,prix);
          setRef("")
          setDes("")
          setQte(0)
          setPrix(0)
          setTextBouton("Ajout ligne")
        }

        const [textBouton, setTextBouton] = useState("Ajout ligne");

      useEffect(() => {
       setRef(props.articles.reference)
       setDes(props.articles.designation)
       setQte(props.articles.qte)
       setPrix(props.articles.prix)
      if(props.articles.reference.length>0 ) setTextBouton("Modification ligne")
      }, [props.articles]);

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
           {textBouton}
        </button>
      </div>
    )
}
export default FormFacture
