import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../utils";
import { useEffect } from "react";
import { useViewport } from "../../CustomHooks/index";
import { useDispatch } from "react-redux";
import {setMovieCurrent, setMoviesDetail} from "../../store/MoviesSlice/MoviesSlice";


function MoviesRow(props) {
  const sliderRef = useRef();
  const movieRef = useRef();
  const { movies, title, isNetflix, idSection } = props;
  const [isDrag, setDrag] = useState(false);
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMoviesDetail(movie));
    dispatch(setMovieCurrent(movie));
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * -2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const onDragStart = (e) => {
    setDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <MoviesRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>

        <MoviesSlider
          ref={sliderRef}
          draggable="true"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragEnter={onDragEnter}
          style={
            movies && movies.length > 0
              ? {
                  gridTemplateColumns: `repeat(${movies.length}, ${
                    windowWidth > 1200
                      ? "360px"
                      : windowWidth > 992
                      ? "300px"
                      : windowWidth > 768
                      ? "250px"
                      : "200px"
                  })`,
                }
              : {}
          }
        >
          {movies &&
            movies.length > 0 &&
            movies.map((movie, index) => {
              if (true) {
                let imageUrl = movie.source
                return (
                  <div
                    key={index}
                    className="movieItem"
                    ref={movieRef}
                    draggable="false"
                    onClick={() => handleSetMovie(movie)}
                  >
                    <img src={imageUrl} alt="" draggable="false" />
                    <div className="movieName">{movie.title || movie.name}</div>
                  </div>
                );
              }
            })}
        </MoviesSlider>
      <div
        className={`btnLeft ${isNetflix && "isNetflix"}`}
        onClick={handleScrollLeft}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetflix && "isNetflix"}`}
        onClick={handleScrollRight}
      >
        <FiChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default MoviesRow;

const MoviesRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  height: 100%;
  width: 100%;
  .heading {
    font-size: 21px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    transform-origin: center;
    transform: translateY(-50%);
    height: 50px;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetflix {
      height: 100px;
      width: max-content;
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    transform-origin: center;
    transform: translateY(-50%);
    height: 50px;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetflix {
      height: 100px;
      width: max-content;
    }
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 10px;

  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    user-select: none;
    transition: all 0.3s linear;
    border-radius: 6px;
    transform: center left;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      background-color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      text-align: center;
    }
  }
`;
