import EnteteFacture from './EnteteFacture'
import DetailFacture from './DetailFacture'
import FormFacture from './FormFactureAvecUseRef'
import { useState,useCallback } from 'react'

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
     
      const ajoutLigne = useCallback((ref,des,qt,pr) => {
         //on construit la nouvelle ligne 
         let ligne={reference:ref,designation:des,qte:qt,prix:pr}
     
         //on change le state d'articles en lui ajoutant la ligne
         setArticle([...articles, ligne])

        },[articles]);
      
      const suppLigne = useCallback((index) => {
         if (
          !window.confirm("Are you sure you want to delete")
        ) {
          return;
        }
        articles.splice(index, 1);
        setArticle([...articles])

      },[articles]);

      const [indexModif,setIndexModif]=useState("")

      const modifLigne = useCallback((ref,des,qt,pr) => {  console.log(indexModif)
        let ligne={reference:ref,designation:des,qte:qt,prix:pr}
        
        setArticle((prevData) => {
            const newData = [...prevData];
    
        newData[indexModif] = ligne;
        setIndexModif("")
        return newData;
          })
     },[articles,indexModif]);

    return (
      <div>
        <EnteteFacture fact={facture} cl={client} arts={articles} />
        <DetailFacture arts={articles} suppLigne={suppLigne}  setIndexModif={setIndexModif}/>
        <FormFacture ajoutLigne={ajoutLigne} articles={indexModif?articles[indexModif] :{reference:"",designation:"",qte:0,prix:0}} modifLigne={modifLigne} />
      </div>
    )

}

export default Facture
