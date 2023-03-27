import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import homebanner from "./homebanner.css";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");
  useEffect(()=>{
    fetchData(param).then( res => setList(res.data.results))
  },[]);
  console.log(list)

  const handleClick=(list)=>{
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(list?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error));
    }
  };

  const opts={
    height: "390",
    width: "100%",
    playerVars:{
      autoplay: 1,
    },
  };

  return(
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{ title }</h2>
        <div className="col">
          <div className="row__posters">
            {
              list.map(item => <img
                onClick={handleClick}
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />)
            }
          </div>
        </div>
      </div>
      {
        trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
      }
    </div>
  )
}

export default List;