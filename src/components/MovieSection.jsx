import React, { useEffect, useState } from 'react';
import '../index.css'
import NavBar from './NavBar';
import './Cards';
import Cards from './Cards';
import.meta.env.VITE_OMDB_API_KEY;
import MovieList from './MovieList';
import getRandomMovies from './getRandomMovies';

const MovieSection = () => {
  const [MovieName, setMovieName] = useState('');
  const [loading, setLoading] = useState(true);
  const [matchFound,setMatchFound]=useState(false);
  const [movies,setMovies]=useState('');

  const randomTenMovies = getRandomMovies(MovieList, 24);
  const Check = async(m) => {
    try{
    setLoading(true);
    const response= await fetch(`https://www.omdbapi.com/?apikey=a5d12b67&s=`+m);
    let data= await response.json();
    let match=false;
    if(data.Search){
      match = await (data.Search.some((a)=>a.Title.toLowerCase()===m.toLowerCase()));}
    if (match) {
           setMovieName(m);
           setMatchFound(true);
           setLoading(false);
    } else {
      setMovieName(m);
      setMatchFound(false);
      setLoading(false);
    }
  }catch(err){
    console.log(err);
  }
  };
  const Buttons=()=>{
    setMovieName('');
  }
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
        const response = await fetch(`https://www.omdbapi.com/?apikey=a5d12b67&s=`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search ||[]); 
        setLoading(false);            
      } catch (err) {
        console.error("Error fetching movies:", err);
        setLoading(false); 
      }
    };
  
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh' 
      }}>
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem' }}>Loading movies...</p>
      </div>
    );
  }

  return (
    <div>
    <NavBar C={Check} E={Buttons}/>
    {
      MovieName===''? (
        <div className="cab">
    {randomTenMovies.map((a,idx)=>(<li key={idx}><Cards m={a}/></li>))} </div>):
      matchFound ? <div className="Card-Center"><Cards m={MovieName}/></div>:<h3 style={{color:"red" ,display:"flex",justifyContent:"center",position:"relative",top:"5rem"}}>No Movie Named {MovieName}{movies}</h3>
    
   
    }
  </div>
   
  );
};

export default MovieSection;