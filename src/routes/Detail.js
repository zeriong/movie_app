import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const [movie, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async ()=> {
        const response = await (
            await fetch(
                `https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(response.data.movie);
        setLoading(false);
    };
    useEffect(()=> {
        getMovie().then();
    },[getMovie]);
    return (
        <div className="detail-container">
            { loading ? (<h1 className="loading">Loading...</h1>) : (
                <div style={{
                    height:"100%",
                    display:"flex",
                    alignItems:"center",
                }}>
                    <div className="back">
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                            <div style={{position:"relative", left:"28px"}}>
                                Back
                            </div>
                        </Link>
                    </div>
                    <div className="detail-inner">
                        <div className="detail-img">
                            <img src={movie.large_cover_image} alt="detail-img"/>
                        </div>
                        <div className="detail-content">
                            <h1 className="detail-title">{movie.title_long}</h1>
                            <h2 className="detail-genres">{`Genres : ${movie.genres}`}</h2>
                            <h2 className="detail-runtime">{`Runtime : ${movie.runtime} Minutes`}</h2>
                            <h2 className="detail-synopsis">{`Synopsis : ${movie.description_full}`}</h2>
                            <div style={{
                                width:"100%"
                            }}>
                                <button className="detail-btn" onClick={()=>{window.open(movie.torrents[0].url);}}
                                        style={{cursor:"pointer"}}> Torrent 720p Download
                                </button>
                                <button className="detail-btn" onClick={()=>{window.open(movie.torrents[1].url);}}
                                        style={{cursor:"pointer"}}> Torrent 1080p Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Detail;