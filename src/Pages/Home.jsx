import { useSelector } from "react-redux";
import Contents from "../components/Contents/Contents";
import Intro from "../components/Intro/Intro";
import Menus from "../components/Menus/Menus";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";

function Home() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default Home;
