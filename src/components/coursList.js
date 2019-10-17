import React from 'react';

class CoursList extends React.Component{
  render()
//on utilise le fragment pour eviter la repetition de div et on recuperer la table detals envoyé par App state
  {  return (
    <React.Fragment>
        <ul >
            <li key={this.props.details.index}>{this.props.details.nom}</li>
        </ul>
    </React.Fragment>
  );}
}

export default CoursList;