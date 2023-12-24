
import React, {useEffect} from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviesRow from "../../components/Contents/MoviesRow";
import {useDispatch, useSelector} from "react-redux";
import * as ACTIONS from "../../store/MoviesSlice/MoviesSlice";
import moment from "moment";
function Movie() {
    const dispatch = useDispatch();
    const { movie } = useSelector((state) => state.infoMovies);

    const {
        TrendingMovies,
    } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(ACTIONS.getTopratedMovies());
    }, [dispatch]);
    return (
        <Movies className='container'>
            <video id="video_1" className="video-js vjs-default-skin" controls data-setup='{}'>
                <source src="https://vjs.zencdn.net/v/oceans.mp4?sd" type='video/mp4' label='SD' res='480'/>
                <source src="https://vjs.zencdn.net/v/oceans.mp4?hd" type='video/mp4' label='HD' res='1080'/>
                <source src="https://vjs.zencdn.net/v/oceans.mp4?phone" type='video/mp4' label='phone' res='144'/>
                <source src="https://vjs.zencdn.net/v/oceans.mp4?4k" type='video/mp4' label='4k' res='2160'/>
            </video>
            <div className="container">

                <div className="movieInfo">
                    <h2 className="movieTitle">
                        {movie && (movie.name || movie.title)}
                    </h2>
                    <p className="statistical">
              <span className="rating">
                Rating: {movie && movie.vote_average * 10}%
              </span>
                        <span className="popularity">
                Popularity: {movie && movie.popularity}
              </span>
                    </p>
                    <p className="releaseDate">
                        Release Date:{" "}
                        {movie && moment(movie.release_date).format("DD/MM/YYYY")}
                    </p>
                    <p className="runtime">
                        Runtime: {movie && (movie.runtime || movie.episode_run_time)}
                    </p>

                    <p className="overview">{movie && movie.overview}</p>

                </div>
                </div>
            <MoviesRow
                movies={TrendingMovies}
                title="Trending Movies"
                idSection="trending"
            />
        </Movies>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    justifyContent: 'center'
};
const Movies = styled.div`
  height: 130%;
   justify-items: center  ;
  margin-top: 100px;
  margin-left: 20px;
  background-color: black;
`

export default Movie;
