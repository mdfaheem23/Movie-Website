import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import MovieWrapper from './components/MovieWrapper';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [movieName, setMovieName] = useState('');
  const [matchFound, setMatchFound] = useState(true);
  const [Loading,SetLoading]=useState(false);
  const Check = async(m) => {
    try{
    SetLoading(true);
    const response= await fetch(`https://www.omdbapi.com/?apikey=a5d12b67&s=`+m);
    let data= await response.json();
    let match=false;
    if(data.Search){
      match = await (data.Search.some((a)=>a.Title.toLowerCase()===m.toLowerCase()));}
    if (match) {
           setMovieName(m);
           setMatchFound(true);
           SetLoading(false);
    } else {
      setMovieName(m);
      setMatchFound(false);
      SetLoading(false);
    }
  }catch(err){
    console.log(err);
  }
  };
  const Buttons=()=>{
    setMovieName('');
  }
  if(Loading)
    return <div className="Spinner-Center">
      <div className="spinner"></div>
      <h3>Loading...</h3>
    </div>
  return (
    <>
      <NavBar C={Check} D={Buttons}/>
      {
        movieName ===''? <div><Hero/><MovieWrapper d={20}/></div>:
        matchFound ?<div className="Card-Center"> <Cards m={movieName} className="ms-5"/></div>:
        <h3 style={{color:"red" ,display:"flex",justifyContent:"center",position:"relative",top:"150px"}}>No Match Found for {movieName} </h3>
      }
    </>
  );
}
export default App;