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

function Movie() {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const {MovieCurrent,ChapterCurrent } = useSelector((state) => state.infoMovies);
    const [run,setRun]=useState(false);

    const onClickPlay=()=>{
        console.log("asasda"+ChapterCurrent);
        setRun(!run);
    }
    const {
        TrendingMovies
    } = useSelector((state) => state.infoMovies);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        dispatch(ACTIONS.getTopratedMovies());
    }, [dispatch]);
    const handleReadStory = () => {
        navigate('/story');
      };
      const [isFollowed, setIsFollowed] = useState(false);
      const handleFollow = () => {
        setIsFollowed(!isFollowed);
      };

      const handleViewComments = () => {
        // Toggle the state to show/hide comments
        setShowComments(!showComments);}

    return (
        <Movies className='container'>
            {/*<video id="video_1" className="video-js vjs-default-skin" controls data-setup='{}'>*/}
            {/*    <source src="https://www.youtube.com/watch?v=leJb3VhQCrg&list=RDIcNbh3T_tEI&index=8&ab_channel=W%2Fn" type='video/mp4' label='SD' res='480'/>*/}
            {/*    <source src="https://vjs.zencdn.net/v/oceans.mp4?hd" type='video/mp4' label='HD' res='1080'/>*/}
            {/*    <source src="https://vjs.zencdn.net/v/oceans.mp4?phone" type='video/mp4' label='phone' res='144'/>*/}
            {/*    <source src="https://vjs.zencdn.net/v/oceans.mp4?4k" type='video/mp4' label='4k' res='2160'/>*/}
            {/*</video>*/}
            <ReactPlayer
                playing={run}
                // loop={true}
                width="70%"
                height="70%"
                volume={1}
                url= {ChapterCurrent?.source_video}
                className="videoIntro"
            />
            <Button onClick={onClickPlay}>Play/Pause</Button>
            <ListChapter story={"truyen 10"}/>
            <div className="container">

                <></>
                <ActionsContainer>
                        {/* Buttons for reading story and viewing comments */}
                        <Button onClick={handleReadStory}>Read Story</Button>
                        <Button onClick={handleViewComments}>
                            {showComments ? "Hide Comments" : "View Comments"}
                        </Button>
                        <Button onClick={handleFollow}>
                        {isFollowed ? 'Unfollow' : 'Follow'}
                        </Button>
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
  height: 130%;
   justify-items: center  ;
  margin-top: 100px;
  margin-left: 20px;
  background-color: black;
`
const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-left: 20px;
  background-color: black;
`;

const VideoContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  color: white;
`;

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
export default Movie;
