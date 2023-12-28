import React, {useState, useEffect} from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviesRow from "../../components/Contents/MoviesRow";
import {useDispatch, useSelector} from "react-redux";
import * as ACTIONS from "../../store/MoviesSlice/MoviesSlice";

import {useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";
import ListChapter from "../../components/ListChapter/ListChapter";
import axios from "axios";
import {API} from "../../constants/API";

function Movie() {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const {MovieCurrent,ChapterCurrent } = useSelector((state) => state.infoMovies);
    const [run,setRun]=useState(false);
    const [sumChap,setSumChap]=useState();



    const onClickPlay=()=>{
        console.log("asasda"+ChapterCurrent);
        setRun(!run);
    }
    const {
        TrendingMovies
    } = useSelector((state) => state.infoMovies);
    const [showComments, setShowComments] = useState(false);

    useEffect(()=>{
        try {
            axios({
                    method: "get",
                    url:`${API.API_COUNT_CHAPTER}/${MovieCurrent.name}`,
                    withCredentials: false,
                }
            ).then(res =>{
                console.log(res.data);
                setSumChap(res.data);
            })

        } catch (error) {
            console.log("get data fail", error);
        }
    })
    useEffect(() => {
        dispatch(ACTIONS.getTopratedMovies());
    }, [dispatch]);

      const handleViewComments = () => {
        // Toggle the state to show/hide comments
        setShowComments(!showComments);}

    return (
        <Movies className='container'>
            <p style={{fontSize:25,color: "mintcream",padding : "1rem",fontWeight: 'bold'}}>{MovieCurrent.name} </p>
            <IntroContainer>
                <ReactPlayer
                    playing={run}
                    width="100%"
                    height="100%"
                    volume={1}
                    url={ChapterCurrent?.source_video}
                    className="videoIntro"
                />
            </IntroContainer>
            <Button onClick={onClickPlay}>Play/Pause</Button>
            <ListChapter sumChap={sumChap}/>
            <div className="container">

                <></>
                <ActionsContainer>
                        {/* Buttons for reading story and viewing comments */}
                        <Button onClick={handleViewComments}>
                            {showComments ? "Hide Comments" : "View Comments"}
                        </Button>
                        {/*<Button onClick={handleFollow}>*/}
                        {/*{isFollowed ? 'Unfollow' : 'Follow'}*/}
                        {/*</Button>*/}
                        </ActionsContainer>
                        {/* Comments */}
                        {showComments && (
                        <CommentsContainer>

                            <Comment>
                            <CommentAuthor>John Doe:</CommentAuthor>
                            Comment text goes here...
                            </Comment>
                            <Comment>
                            <CommentAuthor>Jane Doe:</CommentAuthor>
                            Another comment text...
                            </Comment>
                            {/* Add more comments as needed */}
                        </CommentsContainer>
                        )}
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
  height: 100%;
   justify-items: center  ;
  margin-top: 100px;
  margin-left: 20px;
  background-color: black;
`
const ActionsContainer = styled.div`
  margin-top: 20px;

  button {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const CommentsContainer = styled.div`
  margin-top: 20px;
  color: white;
`;

const Comment = styled.div`
  margin-bottom: 10px;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
const IntroContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  position: relative;
  padding-top: 36%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }`
export default Movie;
