import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  getSearchMovies,
  setMoviesDetail,
} from "../../store/MoviesSlice/MoviesSlice";

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies() {
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) {
      dispatch(getSearchMovies(keywords));
    }
  }, [keywords, dispatch]);

  return (
    <SearchPane>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div className="searchContent">
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => dispatch(setMoviesDetail(movie))}
                >
                  <img src={imageUrl} alt={movie.title || movie.name} />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h1>Your search for "{keywords}" did not any matches</h1>
        </NotFound>
      )}
    </SearchPane>
  );
}

export default SearchMovies;
const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;
  .searchContent {
    padding: 40px 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 8px;
    &:hover .movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s linear;
      transform: scale(1);
      margin: 12px 0;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
        z-index: 10;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        color: var(--color-white);
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
