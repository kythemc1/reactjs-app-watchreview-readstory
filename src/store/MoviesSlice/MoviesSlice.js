import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {API} from "../../constants/API";

const API_KEY = "74d1111ff793d2c86a4104bab872bc34";
const BASE_URL = "https://api.themoviedb.org/3";

// get netflix data
export const getNetflixOriginals = createAsyncThunk(
  "infoMovies/getNetflixOriginals",
  async () => {
    try {
      const result =await axios({
              method: "get",
              url:API.API_GET_CATE_DRAMA,
              withCredentials: false,
          }
      )
        return result.data;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);
//get trending
export const getTrendingMovies = createAsyncThunk(
  "inforMovies/getTrendingMovies",
  async () => {
    try {
        const result =await axios({
                method: "get",
                url:API.API_GET_CATE_DRAMA,
                withCredentials: false,
            }
        )
        return result.data;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);

//get search movies
export const getSearchMovies = createAsyncThunk(
  "infoMovies/getSearchMovies",
  async (keywords) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
      );
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);

export const getTopratedMovies =createAsyncThunk(
    "infoMovies/toprate",
    async (keywords) => {
        try {
            const result =await axios({
                    method: "get",
                    url:API.API_GET_CATE_FAMILY,
                    withCredentials: false,
                }
            )
            return result.data;
        } catch (error) {
            console.log("get data fail", error);
        }
    }
);

export const getActionMovies = createAsyncThunk(
  "infoMovies/getActionMovies",
  async () => {
    try {
      const result = await axios.get(`
      ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28
    `);
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);

export const getComedyMovies = createAsyncThunk(
  "infoMovies/getComedyMovies",
  async () => {
    try {
      const result = await axios.get(`
      ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35
    `);
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);

export const getHorrorMovies = createAsyncThunk(
  "infoMovies/getHorrorMovies",
  async () => {
    try {
      const result = await axios.get(`
      ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27
    `);
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);
export const getRomanceMovies = createAsyncThunk(
  "infoMovies/getRomanceMovies",
  async () => {
    try {
      const result = await axios.get(`
      ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749
    `);
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);
export const getDocumentariesMovies = createAsyncThunk(
  "infoMovies/",
  async () => {
    try {
      const result = await axios.get(`
      ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99
    `);
      return result.data.results;
    } catch (error) {
      console.log("get data fail", error);
    }
  }
);

const MoviesSlice = createSlice({
  name: "infoMovies",
  initialState: {
    NetflixOriginals: null,
    TrendingMovies: null,
    TopratedMovies: null,
    ActionMovies: null,
    ComedyMovies: null,
    HorrorMovies: null,
    RomanceMovies: null,
    DocumentariesMovies: null,
    MovieDetail: null,
    SearchMovies: null,
      MovieLink: null,
      MovieId: null,
      SumChapter: null,
      MovieCurrent:null,

  },

  reducers: {
    setMoviesDetail: (state, action) => {
      state.MovieDetail = action.payload;
    },
      setMovieCurrent:(state,action)=>{
        state.MovieCurrent=action.payload;

      }
  },

  extraReducers: {
    // get data netflix originals
    [getNetflixOriginals.fulfilled]: (state, action) => {
      state.NetflixOriginals = action.payload;

    },
    //get treding
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    // get search movies
    [getSearchMovies.fulfilled]: (state, action) => {
      state.SearchMovies = action.payload;
    },
    [getTopratedMovies.fulfilled]: (state, action) => {
      state.TopratedMovies = action.payload;
    },
    [getComedyMovies.fulfilled]: (state, action) => {
      state.ComedyMovies = action.payload;
    },
    [getHorrorMovies.fulfilled]: (state, action) => {
      state.HorrorMovies = action.payload;
    },
    [getRomanceMovies.fulfilled]: (state, action) => {
      state.RomanceMovies = action.payload;
    },
    [getDocumentariesMovies.fulfilled]: (state, action) => {
      state.DocumentariesMovies = action.payload;
    },
    [getActionMovies.fulfilled]: (state, action) => {
      state.ActionMovies = action.payload;
    },
  },
});

const { reducer, actions } = MoviesSlice;
export const { setMoviesDetail,setMovieCurrent } = actions;
export default reducer;
