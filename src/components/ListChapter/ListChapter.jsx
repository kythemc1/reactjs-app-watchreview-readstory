import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../constants/API";
import {setChapterCurrent} from "../../store/MoviesSlice/MoviesSlice";

export default function ListChapter(props){
    const {story} =props;
    const dispatch = useDispatch();
    const [chap,setChap]=useState(1);
    const { MovieCurrent } = useSelector((state) => state.infoMovies);
    const [sumChap,setSumChap]=useState();
    const onClickInput=(e)=>{
        e.preventDefault();
        axios({
                method: "get",
                url:`${API.API_GET_CHAP}/${MovieCurrent?.name}/${chap}`,
                withCredentials: false,
            }
        ).then(res =>{
            dispatch(setChapterCurrent(res.data));
        })

    }

  ;
    useEffect(()=>{
        try {
            axios({
                    method: "get",
                    url:`${API.API_COUNT_CHAPTER}/${story}`,
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
    return(
        <div style={{color:"#fff"}}>
            <p>Tổng Chapter : {sumChap}</p>
            <p> Chọn Chapter bạn muốn xem : 1->{sumChap}</p>
            <form style={{flexDirection: "row",justifyContent: "flex-start",height:40}} onSubmit={onClickInput}>
                <input style={{width: 50,height:40}}
                    type="number"
                    onChange={(e) => setChap(e.target.value)}
                    value={chap}
                    required
                />
                <button style={{width: 80,height:40}}>Chọn</button>
            </form>

        </div>
    )
}
