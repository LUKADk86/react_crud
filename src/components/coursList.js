import React from 'react';

class CoursList extends React.Component{
  render()
//on utilise le fragment pour eviter la repetition de div et on recuperer la table detals envoyé par App state
  {  return (
    <React.Fragment>   
            <li key={this.props.details.index}>
            {this.props.details.nom}
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
           
              
            
    </React.Fragment>
  );}
}

export default CoursList;