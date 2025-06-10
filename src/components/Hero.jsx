import React from 'react'
import {useState,useEffect} from 'react'
import MovieList from './MovieList';
const Hero = () => {
  let [Image1,SetImage1]=useState([]);
  let [Loading,SetLoading]=useState(true);
  useEffect(()=>{

    const Fetchdata= async()=>{
      while(Image1.length<3){
      try{
        let Random=MovieList[(Math.floor(Math.random() * MovieList.length))];
      let a= await fetch("https://www.omdbapi.com/?apikey=a5d12b67&t="+Random);
      let b=await a.json();
      SetImage1(Image1=>[...Image1,b.Poster]);
      SetLoading(false);
      }catch(err){
        console.log("here is the error"+err);
        SetLoading(false);
      }
    }

  };Fetchdata();}
  ,[]);
  if(Loading)
    return <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
    <div className="spinner"></div>
    <h3 style={{marginTop:"1rem"}}>Loading....</h3></div>
  return (
    <div className="heero">
    <div className=" carousel slide mt-5 w-100 px-5 mb-5"  id="carouselExampleCaptions">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" className="active" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" className="active "  data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner Center" >
      <div className="carousel-item active">
        <img src={Image1?.[0]} class="d-block heero1" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">{Image1?.Title}</h5>
          <p></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Image1?.[1]} class="d-block heero1" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">{Image1?.Title}</h5>
          <p><b></b></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Image1?.[2]} class="d-block heero1" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">{Image1?.Title}</h5>
          <p><b></b></p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next color-black" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon color-black" aria-hidden="true"></span>
      <span className="visually-hidden color-black">Next</span>
    </button>
  </div>
    <br/>
  </div>
  )
}
export default Hero