import PropTypes from "prop-types";
import { Link }from "react-router-dom";

function Movie({id,coverImg, title, summary, genres}){
    return (
        <div className="movie-content">
            <img className="movie-img" src={coverImg} alt={title}/>
            <div className="movie-inner">
                <h2 className="movie-title">
                    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                        {title}
                    </Link>
                </h2>
                <p className="movie-summary">{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <div>
                    <ul className="movie-genres">
                        <h1 style={{paddingRight:"6px",fontWeight:"bold", height:"12px"}}>Genres : </h1>
                        {genres.map((g)=> (
                            <li style={{padding:"0 7px"}} key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
                <h1 className="click-title">
                    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                        Details & Download Click here.
                    </Link>
                </h1>
            </div>
        </div>
    );
}

Movie.propTypes ={
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;