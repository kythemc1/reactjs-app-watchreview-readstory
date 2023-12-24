import moment from "moment/moment";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMoviesDetail} from "../../store/MoviesSlice/MoviesSlice";
import { AiOutlineClose } from "react-icons/ai";
import {useNavigate} from "react-router-dom";

function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleCloseModal = () => {
    dispatch(setMoviesDetail(null));
  };
  const onCLickButtonWatch=()=>{
      // dispatch(setMovieCurrent())
      navigate('/movie')
        console.log(movie);
  }
    const onCLickButtonRead=()=>{
        // dispatch(setMovieCurrent())
        navigate('/story')
    }

  return (
    <MoviesDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <AiOutlineClose className="close" onClick={handleCloseModal} />
          <div className="movieInfo">
              <button style={{backgroundColor:"red"}} onClick={()=>onCLickButtonWatch()}>Xem review</button>
              <button style={{backgroundColor:"red"}} onClick={()=>onCLickButtonRead()}>Đọc truyện</button>
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
      </div>
    </MoviesDetailModal>
  );
}

export default MoviesDetail;

const fadeIn = keyframes`
0%: {background:rgba(0,0,0,0)}
100%: {background: rgba(0,0,0,0.6)}
`;

const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }
  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    color: var(--color-white);
    height: 80%;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);
      .close {
        font-size: 30px;
      }
      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 40%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
      }
      @media screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 50%,
          transparent
        );
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 60%,
          transparent
        );
      }

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: var(--color-white);
        font-size: 20px;
        padding-top: 0px;
        @media screen and (max-width: 600px) {
          width: 80%;
          font-size: 16px;
        }
        .movieTitle {
          margin-top: 30px;
        }
        .statistical {
          margin-top: 20px;
          display: flex;
          align-items: center;
          .rating {
            color: var(--color-green);
          }
          .popularity {
            color: yellow;
            margin-left: 20px;
          }
        }
        .releaseDate,
        .runtime {
          margin-top: 20px;
        }
        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;
        }
      }
    }
  }
  .showModal {
    top: 25%;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
`;
