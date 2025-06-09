import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import MovieWrapper from './components/MovieWrapper';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [movieName, setMovieName] = useState('');
  const [matchFound, setMatchFound] = useState(true);
  const [Button1,SetButton1]=useState(false);
  const Check = async(m) => {
    const response= await fetch(`https://www.omdbapi.com/?apikey=a5d12b67&s=`+m);
    let data= await response.json();
    let match=false;
    if(data.Search){
      match = await (data.Search.some((a)=>a.Title.toLowerCase()===m.toLowerCase()));}
    if (match) {
           setMovieName(m);
           setMatchFound(true);
    } else {
      setMovieName(m);
      setMatchFound(false);
    }
  };
  const Buttons=()=>{
    console.log("Pressed");
    setMovieName('');
    
  }
  const Movie=()=>{
    Button1(true);
  }
  return (
    <>
      <NavBar C={Check} D={Buttons}/>
      {
        movieName ===''? <div><Hero/><MovieWrapper d={24}/></div>:
        matchFound ? <Cards m={movieName} className="ms-5"/>:
        <h3 style={{color:"red" ,display:"flex",justifyContent:"center",position:"relative",top:"150px"}}>No Match Found for {movieName} </h3>
      }
    </>
  );
}
export default App;