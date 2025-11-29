import React, { cache, useEffect, useState } from 'react'
import "./Banner.css"
import Myaxios from "../../Utils/Myaxios.js";
import MyRequests from "../../Utils/MyRequests.js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import defaultbaner from "../../assets/images/netflix-curent-baner.jpg";


function Banner() {
    const [movie,setMovie] = useState([]);
 useEffect(
    ()=>{
        (
            async()=>{
                try{
                    const requests = await Myaxios.get(
                        MyRequests.fetchNetflixOriginals
                    );
                    // console.log(requests.data.results);
                    const randomMovie =
                    requests.data.results[
                        Math.floor(Math.random() * requests.data.results.length)
                        ]; 
                        setMovie(randomMovie);
                }catch(error){
                    console.log("error",error);
                }
            }
        )()
    }
    ,[]
 );

// console.log(movie);
// console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);

return (
  <>
    <div
      className="banner-img"
      style={{
        backgroundImage: movie?.backdrop_path 
        ? `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")` 
        : `url(${defaultbaner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="netflix-center">
        <div className="netflix-moto">
          <h1>Unlimited movies, TV</h1>
          <h1> shows, and more</h1>
        </div>
        <div className="netflix-title">
          <p>Starts at USD 2.99. Cancel anytime.</p>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>
        <div className="signin-btn">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address"
            required
          />
          <button>
            Geat Started
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  </>
);
}

export default Banner
