import SearchMovies from "../components/SearchMovies/SearchMovies";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
function Search() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail
        showModal={MovieDetail ? true : false}
        movie={MovieDetail}
      />
    </div>
  );
}

export default Search;
