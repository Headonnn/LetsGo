import React from 'react';

const Dept = ({donnees,setDept}) => {
    

    const handleDept = ()=>{
        
        let  depa=[]
        depa =donnees.records.map((e,i)=>{
          
           return (e.fields.departement)
        } )
        
        let filtDepa = depa.filter(function(e,i){return depa.indexOf(e)==i})
        filtDepa.unshift('All')
        return filtDepa.map((e,i)=>{return(e==undefined ? <option key={i} value={undefined}>Sans Département</option> : <option key={i} value = {e}>{e}</option>)})
    }
    const handleDepaChange = (e) =>{
        setDept(e.target.value)
        
    }

    return (
        <select onChange = {(e)=>handleDepaChange(e)}>


            {handleDept()}
        </select>
    );
};

export default Dept;