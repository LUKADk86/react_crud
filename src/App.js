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
  console.log(e.target.value)
}
addCourse = (e)=>{
  console.log('hello')
  e.preventDefault()
}



  render() {
  //créer une variable cours qui prend le state cours
  const {cours} = this.state;
  const coursList = cours.map((cour, index)=>{
    //on passe le state.nom sous un props pour l'afficher en props dans le fichier courslist
      return <CoursList details={cour} key={index}/>
  }       
  )
  return (
    <section className="App">
      <h1>Ajouter cours</h1>
      <FormCours updateCourse={this.updateCourse} addCourse={this.addCourse}/>
      {coursList}
    </section>
  );
  }
}

export default App;
