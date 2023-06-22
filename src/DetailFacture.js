
const DetailFacture =(props)=>{
   
 return (
      <div>
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
        {props.arts.map((value,index)=>{
            
             return(<tr  key = {index}>
             <td width="40px">{value.reference}</td>
             <td width="125px"> {value.designation}</td> 
             <td width="40px"> {value.qte}</td> 
             <td width="55px"> {value.prix}</td> 
             <td width="55px"> {value.prix*value.qte}</td>  
             </tr>  )          
                    
                  
        }) }
          </tbody></table>
        </div>
 
      </div>
    )
}
export default DetailFacture 


