import React from 'react'
import Cards from './Cards'
import {useState,useEffect} from 'react'
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
    <div>
    <div className=" Hero carousel slide mt-5 w-40 px-5 mb-5 OverallHero" style={{width:"80%",color:"black",marginLeft:"140px",opacity:"0.7",height:"600px"}}  id="carouselExampleCaptions">
    <div className="carousel-indicators me-5">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" className="active" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" className="active "  data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" >
      <div className="carousel-item active">
        <img src={Image1?.[0]} class="d-block heero " alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">{Image1?.Title}</h5>
          <p></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Image1?.[1]} class="d-block heero" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <h5 className="text-white">{Image1?.Title}</h5>
          <p><b></b></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Image1?.[2]} class="d-block heero" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">{Image1?.Title}</h5>
          <p><b></b></p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev LeftArrow1" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{color:"black",marginLeft:"100px"}}>
      <span className="carousel-control-prev-icon ms-5 LeftArrow1" aria-hidden="true"></span>
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
const MovieList = [
  "The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump",
  "Inception", "The Matrix", "Fight Club", "The Lord of the Rings: The Fellowship of the Ring",
  "The Lord of the Rings: The Two Towers", "The Lord of the Rings: The Return of the King", "Interstellar",
  "The Silence of the Lambs", "Se7en", "The Green Mile", "Gladiator", "Saving Private Ryan",
  "Schindler's List", "The Prestige", "The Departed", "Whiplash", "Joker", "Parasite", "The Pianist",
  "La La Land", "The Truman Show", "Good Will Hunting", "The Social Network", "The Imitation Game",
  "The Theory of Everything", "Django Unchained", "Inglourious Basterds", "Shutter Island", "Tenet",
  "The Revenant", "Oppenheimer", "The Batman", "Avengers: Endgame", "Avengers: Infinity War",
  "Iron Man", "Captain America: The Winter Soldier", "Doctor Strange", "Black Panther", "Thor: Ragnarok",
  "Guardians of the Galaxy", "Spider-Man: No Way Home", "The Amazing Spider-Man", "Ant-Man",
  "Captain Marvel", "Deadpool", "Logan", "X-Men: Days of Future Past", "Man of Steel", "Wonder Woman",
  "Aquaman", "Justice League", "The Flash", "The Suicide Squad", "Birds of Prey", "The Hunger Games",
  "Catching Fire", "Mockingjay Part 1", "Mockingjay Part 2", "Divergent", "Insurgent", "Allegiant",
  "Maze Runner", "The Scorch Trials", "The Death Cure", "Ready Player One", "Blade Runner 2049",
  "Mad Max: Fury Road", "Dune", "Arrival", "Edge of Tomorrow", "Oblivion", "Snowpiercer", "Ex Machina",
  "Her", "A Beautiful Mind", "The Big Short", "The Irishman", "Catch Me If You Can", "The Wolf of Wall Street",
  "The Great Gatsby", "The Curious Case of Benjamin Button", "1917", "Hacksaw Ridge", "Zero Dark Thirty",
  "American Sniper", "The Hurt Locker", "Argo", "Lincoln", "Darkest Hour", "The King's Speech", "Selma",
  "Hidden Figures", "Moneyball", "Ford v Ferrari", "Rush", "War Horse", "The Book Thief", "Life of Pi",
  "Slumdog Millionaire", "The Kite Runner", "The Boy in the Striped Pajamas", "Hotel Rwanda",
  "The Pursuit of Happyness", "Coach Carter", "Remember the Titans", "The Blind Side", "Million Dollar Baby",
  "Creed", "Rocky", "Ali", "Raging Bull", "Cinderella Man", "Unbroken", "Invictus", "42", "Soul Surfer",
  "The Impossible", "Cast Away", "Gravity", "The Martian", "Apollo 13", "Contact", "First Man",
  "October Sky", "The Right Stuff", "Ad Astra", "Passengers", "The Midnight Sky", "Don't Look Up",
  "I Am Legend", "World War Z", "Contagion", "28 Days Later", "A Quiet Place", "The Conjuring",
  "Insidious", "Sinister", "The Babadook", "It", "It Chapter Two", "Get Out", "Us", "Nope", "Midsommar",
  "Hereditary", "The Witch", "The Lighthouse", "Old", "Split", "Glass", "The Sixth Sense", "Signs",
  "Unbreakable", "The Visit", "The Others", "The Ring", "The Grudge", "The Exorcist", "Poltergeist",
  "The Shining", "Doctor Sleep", "Carrie", "Misery", "Pet Sematary", "Cujo", "1408", "Gerald's Game",
  "Green Book", "CODA", "The Father", "Sound of Metal", "Nomadland", "Minari", "Manchester by the Sea",
  "Room", "Brooklyn", "Lady Bird", "Little Women", "The Help", "The Color Purple", "The Butler",
  "The Secret Life of Bees", "Hidden Life", "Tree of Life", "The Florida Project", "The Peanut Butter Falcon",
  "Jojo Rabbit", "Three Billboards Outside Ebbing, Missouri", "Moonlight", "Boyhood", "The Farewell",
  "Everything Everywhere All At Once", "The Lobster", "The Menu", "Don't Worry Darling", "Triangle of Sadness",
  "Babylon", "TÁR", "The Banshees of Inisherin", "Aftersun", "Women Talking", "The Whale", "The Last Duel",
  "House of Gucci", "Knives Out", "Glass Onion", "Murder on the Orient Express", "Death on the Nile",
  "Sherlock Holmes", "Enola Holmes", "The Nice Guys", "Game Night", "Date Night", "The Heat",
  "Spy", "Bridesmaids", "Pitch Perfect", "Mean Girls", "Clueless", "Legally Blonde", "13 Going on 30",
  "The Devil Wears Prada", "Crazy Rich Asians", "To All the Boys I've Loved Before", "The Kissing Booth",
  "Love, Simon", "Call Me by Your Name", "The Fault in Our Stars", "Me Before You", "Five Feet Apart",
  "A Walk to Remember", "The Notebook", "Dear John", "Safe Haven", "The Vow", "The Lucky One",
  "Twilight", "New Moon", "Eclipse", "Breaking Dawn Part 1", "Breaking Dawn Part 2", "Beautiful Creatures",
  "The Host", "Warm Bodies", "Beastly", "The Mortal Instruments", "Percy Jackson & the Olympians",
  "Eragon", "Stardust", "Inkheart", "Bridge to Terabithia", "Narnia: The Lion, the Witch and the Wardrobe",
  "Narnia: Prince Caspian", "Narnia: The Voyage of the Dawn Treader", "Pan’s Labyrinth", "Coraline",
  "Monster House", "ParaNorman", "Frankenweenie", "Corpse Bride", "The Nightmare Before Christmas",
  "Coco", "Encanto", "Frozen", "Frozen II", "Moana", "Tangled", "Zootopia", "Wreck-It Ralph",
  "Big Hero 6", "Raya and the Last Dragon", "Brave", "Up", "Inside Out", "Soul", "Turning Red",
  "Luca", "Finding Nemo", "Finding Dory", "The Incredibles", "The Incredibles 2", "Toy Story",
  "Toy Story 2", "Toy Story 3", "Toy Story 4", "Cars", "Cars 2", "Cars 3", "Ratatouille", "Monsters, Inc.",
  "Monsters University", "WALL-E", "Bolt", "Treasure Planet", "Atlantis: The Lost Empire", "Lilo & Stitch",
  "The Emperor's New Groove", "Hercules", "Aladdin", "The Lion King", "Beauty and the Beast", "Mulan",
  "Pocahontas", "Tarzan", "The Hunchback of Notre Dame", "Robin Hood", "The Sword in the Stone",
  "The Aristocats", "The Jungle Book", "Bambi", "Dumbo", "Snow White and the Seven Dwarfs",
  "Sleeping Beauty", "Cinderella", "Peter Pan", "Pinocchio", "Alice in Wonderland"
];
export default Hero