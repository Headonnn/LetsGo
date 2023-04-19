import React from 'react';

const Categ = ({donnees,setCateg} ) => {
    const handleCateg = ()=>{
        
        let  haha=[]
        haha =donnees.records.map((e,i)=>{
          
           return (e.fields.categorie)
        } )
        
        let filtHaha = haha.filter(function(e,i){return haha.indexOf(e)==i})
        filtHaha.unshift('All')
        return filtHaha.map((e,i)=>{return(e==undefined ? <option key={i} value={undefined}>Sans categorie</option> : <option key={i} value = {e}>{e}</option>)})
    }
    const handleCategChange = (e) =>{
        console.log(e.target.value)
        setCateg(e.target.value)
        
       
        
    }
    return (
        <select onChange={((e)=>handleCategChange(e))} >
        
             
            {handleCateg()}

        
        </select>
    );
};

export default Categ;