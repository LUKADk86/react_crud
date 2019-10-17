import React from 'react';


const FormCours = (props)=>{
    return (
           <form onSubmit={props.addCourse}>
           <input type="text" name="language" onChange={props.updateCourse}/>
           <button type="submit">Ajouter</button>
           </form>
    );
}
export default FormCours;