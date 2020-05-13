import React,{useState,useEffect} from 'react';
import api from './services/api';

import './App.css';
//import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App(){

  const  [projects,setProjects] = useState([]);
   
  // Primeiro parametro da ussEffect é a função que tem que ser disparada, Segundo no array de dependencias[] quais variaveis seram verificadas para ser disparada a função assim que houver alteração, se Não quiser disparar nada basta deitar array vazio []
  useEffect(()=>{
    api.get('/projects').then( response =>{
      setProjects(response.data);
    });
  },[]);

  async  function handleAddProject(){
    // setProjects([...projects,`Novo Projeto ${Date.now()}`]); // SPREAD OPERATOR 
    const response = await api.post('projects',{
     	    title : `Novo Projeto ${Date.now()}`,
	    owner : "Joezer Fonseca Smaniotto"
    });

    const project = response.data;
    setProjects([...projects,project]);

  }

  return (
    <>
       <Header title="Projects"/>
      
       {/* <img width={300} src={backgroundImage}/>  */}

       <ul>
         {projects.map(project => {
           return <li key={project.id}>{project.title}</li>
         })}
       </ul>

       <button type="button" onClick={handleAddProject}> Adicionar</button>
       
    </>
  )
}

export default App;
