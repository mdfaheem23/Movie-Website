import React from 'react'
import {useState,useEffect} from 'react'
import Cards from './Cards';
import MovieList from './MovieList';
import { getRandomMovies } from './getRandomMovies';
const MovieWrapper = ({d}) => {
    let [Image2,SetImage2]=useState([]);
      const randomTenMovies = getRandomMovies(MovieList, d);
     useEffect(()=>{
        const Fetchdata= async()=>{
          try{
            let Random=  MovieList[(Math.floor(Math.random() * MovieList.length))];
          let a= await fetch("https://www.omdbapi.com/?apikey=a5d12b67&t="+Random);
          let b=await a.json();
          SetImage2(Image2=>[...Image2,b.Poster]);
          }catch(err){
            console.log("here is the error"+err);
          }
      };Fetchdata();}
      ,[]);
  return (
    <div> <div className="cab">
    {randomTenMovies.map((movie,indx)=>{
      return (<li key={indx}><Cards m={movie}/></li> )
     })}
     </div>
   </div>
  )
}
export default MovieWrapper