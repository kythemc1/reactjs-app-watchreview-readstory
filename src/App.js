import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Footer from "./components/Footer/Footer";
import Movie from "./Pages/Movie/Movie";
import Story from "./Pages/Story/Story";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/story" element={<Story />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
