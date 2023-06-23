import { useState,useEffect,useRef } from 'react'

const FormFacture=(props)=>{
  
        const [textBouton, setTextBouton] = useState("Ajout ligne");

        const ref = useRef();
        const des = useRef();
        const qte = useRef();
        const prix = useRef();
        const resultRef = useRef();
     
        const formRef = useRef();

        const validerLigne= (e) => {
            e.preventDefault();
        if(textBouton ==="Ajout ligne") props.ajoutLigne(ref.current.value,des.current.value,qte.current.value,prix.current.value);
        if(textBouton ==="Modification ligne") props.modifLigne(ref.current.value,des.current.value,qte.current.value,prix.current.value);
        formRef.current.reset();
        setTextBouton("Ajout ligne")
        }
 
        useEffect(() => {
            ref.current.value = props.articles.reference
            des.current.value = props.articles.designation
            qte.current.value = props.articles.qte
            prix.current.value = props.articles.prix
           if(props.articles.reference.length>0 ) setTextBouton("Modification ligne")
           }, [props.articles]);
    
            // Fonction pour mettre à jour le résultat lorsqu'il y a un changement dans les champs de formulaire
  const updateResult = () => {
    // Obtenez les valeurs des champs de formulaire
    const value1 = Number(qte.current.value);
    const value2 = Number(prix.current.value);

    // Calculez le stot
    const stot = value1 * value2;

    // Mettez à jour le champ de résultat avec la somme
    resultRef.current.value = isNaN(stot) ? '' : stot;
  };

  // Utilisez useEffect pour mettre à jour le résultat lorsqu'il y a un changement dans les champs de formulaire
  useEffect(() => { 
    updateResult();
  },[]);

    return (
    <form onSubmit={(e) => validerLigne(e)} ref={formRef}>
      <div>
    
       <table border="1">
    
        <tbody>
      <tr>
       
       <td>
        <input type="text" 
        ref={ref} 
        size="1"/> 
        </td> 
       <td> <input type="text" 
       ref={des} 
       size="12"/> </td>  
       <td> <input type="text"  onInput={updateResult} 
       ref={qte} 
       size="2"/> </td> 
       <td> <input type="text" onInput={updateResult} 
       ref={prix} 
       size="2"/></td> 
       <td> <input type="text" 
       ref={resultRef} 
       readOnly size="3"/> </td>
       </tr> 
       </tbody> 
      </table>
        <button type="submit">
           {textBouton}
        </button>
      </div>
      </form>
    )
}
export default FormFacture
