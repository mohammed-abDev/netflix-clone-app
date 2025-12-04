import React, { use, useEffect, useState } from 'react'
import "./Row.css"
import Myaxios from '../../../Utils/Myaxios'
import movieTrailer from 'movie-trailer'
import reactYoutube from 'react-youtube'
import YouTube from 'react-youtube'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";

const base_Url = "https://image.tmdb.org/t/p/original";

function Row({ myTitle, fetchUrl }) {
    const [poster, setPoster] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [selectedPoster, setSelectedPoster] = useState(null);


useEffect(() => {
    (async () => {
        try {
        const postRequsts = await Myaxios.get(fetchUrl);
        setPoster(postRequsts.data.results);
        // console.log(setPoster);
    } catch (error) {
        console.log("error", error);
    }
    })();
}, [fetchUrl]);

console.log(poster);

const clikHandle = (movie)=>{
    if (trailerUrl) {
        setTrailerUrl("");
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((myUrl) => {
            console.log("trailler", myUrl);
            const videoId =new URL(myUrl).searchParams.get('v');
            setTrailerUrl(videoId);
        })
        .catch((error) => console.log(error));
    }
}

const Popup = ({ poster }) => {
    if (!poster) return null;
    return (
    <div className="pop-up">
        <button onClick={() => setSelectedPoster(null)} id="close-icon">
        <CloseIcon />
        </button>
        <div className="youtube-movie">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        <img
        className="close-open-img"
        src={
            `${base_Url}${poster.backdrop_path}` ||
            `${base_Url}${poster.poster_path}`
        }
        alt={poster.name}/>
        <h1>{poster?.title || poster?.name || poster?.original_name}</h1>
        <div className="pop-up-abt">
        <div>{poster.first_air_date || poster.release_date}</div>
        <div>{poster.original_language}</div>
        <div>{`vote ${poster.vote_average}`}</div>
    </div>
        <div className="pop-up-description">
            <p>
                {poster.overview ||
                poster?.title ||
                poster?.name ||
                poster?.original_name}
            </p>
        </div>
    <div className="pop-up-actions">
        <button>
            Get Started <ChevronRightIcon />
        </button>
        <button onClick={() => clikHandle(poster)}>
            {trailerUrl ? "Close" : "Play "} <PlayArrowIcon />
        </button>
    </div>
    </div>
);
};

const opts = {
    height: "390",
    width: "640",
    playerVars: {
        autoplay: 1,
  },
};

return (
    <div className="scroll-poster">
    <h2>{myTitle}</h2>
    <div className="single-poster">
        {poster?.map((myposter, index) => (
        <div key={index} className="postre-us">
            <img
            // onClick={() => clikHandle(myposter)}
            onClick={() => setSelectedPoster(myposter)}
            src={`${base_Url}${myposter.poster_path}`}
            alt={myposter.name}/>
            <div className="poster-order">{index + 1}</div>
        </div>
    ))}
        {selectedPoster && <Popup poster={selectedPoster} />}
    </div>
</div>
);
}

export default Row
