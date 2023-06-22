
const DetailFacture =(props)=>{
   
 return (
      <div>
           <div>
            
            <table border="1">
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


