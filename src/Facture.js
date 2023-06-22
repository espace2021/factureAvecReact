import EnteteFacture from './EnteteFacture'
import DetailFacture from './DetailFacture'
import FormFacture from './FormFacture'
import { useState } from 'react'

const Facture =()=>{
   
       
            const[facture,setFacture]=useState({
                numfact:"100",
                datefact:"18/05/2022"
            });
            const[client,setClient]=useState({
                codecl:12,
                raisoc:"Confort-Plus",
                responsable:"Turki Mounir"
            });
            const [articles,setArticle]=useState([
                {reference:"1",designation:"la vaisselle",qte:3,prix:1500},
                {reference:"3",designation:"Machine a laver",qte:3,prix:1200},
                {reference:"17",designation:"Micro-onde",qte:4,prix:300}
            ]);
     
      const ajoutLigne =(ref,des,qt,pr)=>{
         //on construit la nouvelle ligne 
         let ligne={reference:ref,designation:des,qte:qt,prix:pr}
     
         //on change le state d'articles en lui ajoutant la ligne
         setArticle([...articles, ligne])

    }

    return (
      <div>
        <EnteteFacture fact={facture} cl={client} arts={articles} />
        <DetailFacture arts={articles} />
        <FormFacture ajoutLigne={ajoutLigne}  />
      </div>
    )

}

export default Facture
