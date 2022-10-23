import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const [movie, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async ()=> {
        const response = await (
            await fetch(
                `https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovies(response.data.movie);
    };
    useEffect(()=> {
        getMovie();
    },[]);
    return (
        <div>
            <img src={movie.large_cover_image}/>
            <h1>{movie.title_long}</h1>
            <h2>{`Genres : ${movie.genres}`}</h2>
            <h2>{`Runtime : ${movie.runtime} Minutes`}</h2>
            <h2>{`Synopsis : ${movie.description_full}`}</h2>
            <button onClick={()=>{window.open(movie.torrents[0].url);}}
                    style={{cursor:"pointer"}}> Torrent 720p Download
            </button>
            <button onClick={()=>{window.open(movie.torrents[1].url);}}
                    style={{cursor:"pointer"}}> Torrent 1080p Download
            </button>
        </div>
    );
}
export default Detail;