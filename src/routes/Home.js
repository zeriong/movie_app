import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Welcome from "./welcome";
import "../style.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const response = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).json();
        setMovies(response.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return(
        <div>
            <Welcome/>
            {loading ? (<h1 className="loading">Loading...</h1>)
                : (
                    <div>
                        {movies.map((movie) =>(
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
}
export default Home;