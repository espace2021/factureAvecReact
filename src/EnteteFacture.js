import { useState, useEffect,useMemo } from 'react'

const EnteteFacture=({fact,cl,arts})=> {
   
     //   const [montant,setMontant]=useState(0)
        
        
   /*useEffect(() => {
    
    let total=0;
    const [list,setList]=useState(props.art)
    props.arts.map((value)=>{
          total+=value.qte*value.prix ;
    
    });
    total={sum}
    setMontant(total)
  }) ;  */
const sum=useMemo(()=>{
    console.log("computing sum")
   return arts.reduce((total,item)=>  
        total+Number(item.prix)*Number(item.qte),0)
},[arts])



    return (
      <div>
        <div>
        <h1>Impression Facture</h1>
        Facture N° {fact.numfact}<br/>
        Date Facture : {fact.datefact}<br/>
        Montant : {sum}
        </div>
        <div>
            <h3>Client:</h3>
            Raison sociale : {cl.raisoc}<br/>
            Responsable : {cl.responsable}
        </div>

     </div> 
    )

}
export default EnteteFacture 
