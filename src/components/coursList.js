import React from 'react';

class CoursList extends React.Component{
  //state pour controler l affichage
  state={
    isEdit: false
  }
  renderlist=()=>{
    return(
      <li key={this.props.details.index}>
            {this.props.details.nom}
            {/* on ajoute un bouton pout editer les cours onclick*/}
            <button onClick={()=>this.toggleState()}>Edit</button>
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
    )
  }
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
  //state isedit appelle cette fonction en true
  updateformCours=()=>{
    return(
      <form onSubmit={this.submitupdatename} >
        <input type="text" defaultValue={this.props.details.nom} ref = {(v)=>{this.input=v}}/>
        <button>update</button>
      </form>
    )
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