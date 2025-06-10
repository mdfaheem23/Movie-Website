import React from 'react'
import { useEffect,useState } from 'react'
import '../index.css';

const Cards = ({m}) => {
  const [Image,SetImage]=useState('');
  const [Loading,SetLoading]=useState(false);
  useEffect(()=>{
    const Fetchdata= async()=>{
      SetLoading(true);
      try{
      let a= await fetch("https://www.omdbapi.com/?apikey=a5d12b67&t="+m);
      let b=await a.json();
      SetImage(b);
      console.log(b);
      SetLoading(false);
      }catch(err){
        console.log("here is the error"+err);
        SetLoading(false);
      }
    }
    Fetchdata();
  }
  ,[m]);
  if(Loading)
    return <h3 style={{Color:"white"}}>Loading...</h3>
  return (
    <div class="card lo mb-3 me-4" style={{width:"280px",borderRadius:"10px"}}>
    <img src={Image.Poster} style={{borderRadius:"10px",height:"330px"}} className="border-bottom"></img>
    <div class="card-body">
      <h5 class="card-title image text-center mt-3">{Image.Title}</h5>
      <h6 class="card-subtitle mt-2 text-center " style={{color:"235, 198, 52"}}><b>IMDB : </b>{Image.imdbRating}</h6>
      <p class="card-text text-center fs-6 fa ">{Image.Plot? Image.Plot.slice(0,25)+"...":"No plot Available"}</p>
    </div>
  </div>
  )
}
export default Cards