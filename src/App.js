import React from 'react';
import FormCours from './components/formCours';
import CoursList from './components/coursList';
import './App.css';


class App extends React.Component{
  state= {
    cours: [
      {nom: 'html'},
      {nom: 'javascript'},
      {nom : 'css'}
    ],
    current: ''
  }
//recuperer le cours
updateCourse = (e)=>{
  this.setState({
    current:e.target.value
  })
}
addCourse = (e)=>{
  
  e.preventDefault()
  let cours = this.state.cours
  let current = this.state.current
  cours.push({nom: current});
  this.setState({
    cours: cours,
    current: ''
  })
}
deleteCourse = (index)=>{
  let cours=this.state.cours;
  cours.splice(index,1);
  this.setState({
    cours: cours
  })

}


  render() {
  //créer une variable cours qui prend le state cours
  const {cours} = this.state;
  const coursList = cours.map((cour, index)=>{
    //on passe le state.nom sous un props pour l'afficher en props dans le fichier courslist
      return <CoursList details={cour} key={index} index={index} deleteCourse={this.deleteCourse}/>
  }       
  )
  return (
    <section className="App">
      <h1>Ajouter cours</h1>
      <FormCours updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
      <ul>{coursList}</ul>
    </section>
  );
  }
}

export default App;
