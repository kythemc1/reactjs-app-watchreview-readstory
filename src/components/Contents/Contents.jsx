import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleUp } from "react-icons/fa";
import MoviesRow from "./MoviesRow";
import * as ACTIONS from "../../store/MoviesSlice/MoviesSlice";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../../CustomHooks";

const ScrollToTop = () => {
  scroll.scrollToTop();
};

function Contents() {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();

  const {
    NetflixOriginals,
    TrendingMovies,
    TopratedMovies,
    // ActionMovies,
    // ComedyMovies,
    // HorrorMovies,
    // RomanceMovies,
    // DocumentariesMovies,
    // loading,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    // dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopratedMovies());
    // dispatch(ACTIONS.getComedyMovies());
    // dispatch(ACTIONS.getHorrorMovies());
    // dispatch(ACTIONS.getRomanceMovies());
    // dispatch(ACTIONS.getDocumentariesMovies());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        // loading={loading}
        title="Anime"
        // isNetflix={true}
        idSection="netflix"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Drama"
        idSection="trending"
      />
      <MoviesRow
        movies={TopratedMovies}
        title="Family"
        idSection="toprated"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Top Rated"
        idSection="action"
      />
      {/*<MoviesRow*/}
      {/*  movies={ComedyMovies}*/}
      {/*  title="Comedy Movies"*/}
      {/*  idSection="comedy"*/}
      {/*/>*/}
      {/*<MoviesRow*/}
      {/*  movies={HorrorMovies}*/}
      {/*  title="Horror Movies"*/}
      {/*  idSection="horror"*/}
      {/*/>*/}
      {/*<MoviesRow*/}
      {/*  movies={RomanceMovies}*/}
      {/*  title="Romance Movies"*/}
      {/*  idSection="romance"*/}
      {/*/>*/}
      {/*<MoviesRow*/}
      {/*  movies={DocumentariesMovies}*/}
      {/*  title="Documentaries Movies"*/}
      {/*  idSection="documentaries"*/}
      {/*/>*/}
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
}

export default Contents;
const GoToTop = styled.div`
  position: fixed;
  right: 70px;
  z-index: 100;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  @media screen and (max-width: 680px) {
    right: 40px;
  }
`;
