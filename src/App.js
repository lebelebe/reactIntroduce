import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';

import Header from './main/Header'
import Footer from './main/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Contact from './main/Contact'
// import Introduce from './main/about/Introduce'
// import Skill from './main/about/Skill'
// import Project from './main/portfolio/Project'
// import ProjectView from './main/portfolio/ProjectView'
// import TeamProject from './main/teamworks/TeamProject'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        
        
        <Header></Header>
        {/* <Introduce></Introduce>
        <Skill></Skill>
        <Project></Project>
        <ProjectView></ProjectView>
        <TeamProject></TeamProject>
        <Contact></Contact> */}
        <Footer></Footer>
       
      </BrowserRouter>
    );
  }
}

export default App;