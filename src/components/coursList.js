import React from 'react';

class CoursList extends React.Component{
  //state pour controler l affichage
  state={
    isEdit: false
  }
  //state isedit est false => fonction
  renderlist=()=>{
    return(
      <li key={this.props.details.index}>
            <span>{this.props.details.nom}</span>
            {/* bouton pour inverser la valeur state booleen et l affiche renderlist ou updatesubmitform*/}
            <button onClick={()=>this.toggleState()}>Edit</button>
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
    )
  }
   //state isedit est true => fonction
   updateformCours=()=>{
    return(
      <form onSubmit={this.submitupdatename} >
      {/* defaultvalue modifiable contrairement a value*/}
       {/* ref = {(v)=>{this.input=v}} permet de recuperer la nouvelle value a mettre dans la fonction insertion avec this.input.value*/}
        <input type="text" defaultValue={this.props.details.nom} ref = {(v)=>{this.input=v}}/>
        <button>update</button>
      </form>
    )
  }
  //fonction inverser le state isedit boolean appelé avec le button edit(directement) et update(dans submitupdatename)
  toggleState=()=>{
    let {isEdit}=this.state;
    this.setState({
      isEdit: !isEdit
    })
   
  }
  submitupdatename=(e)=>{
    e.preventDefault();
  
    this.props.editCours(this.props.index, this.input.value);
    this.toggleState();
  }
 
  render()
//on utilise le fragment pour eviter la repetition de div et on recuperer la table detals envoyé par App state
  { 
    let {isEdit}=this.state;
    return (
    <React.Fragment>   
            
           
             {isEdit?this.updateformCours(): this.renderlist()} 
            
    </React.Fragment>
  );}
}

export default CoursList;