import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../constants/API";
import {setChapterCurrent} from "../../store/MoviesSlice/MoviesSlice";

export default function ListChapter(props){
    const {sumChap} =props;
    const dispatch = useDispatch();
    const [chap,setChap]=useState(1);
    const { MovieCurrent } = useSelector((state) => state.infoMovies);
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

    return(
        <div style={{color:"#fff", display: 'flex', flexDirection:'column', gap: '1rem', marginTop: '1rem'}}>
            <p>Tổng Chapter : {sumChap}</p>
            <p> Chọn Chapter bạn muốn xem : </p>
            <form style={{width:'fit-content', display: 'flex', flexDirection: "row", justifyContent:'flex-start', gap: '1rem',height:'fit-content'}} onSubmit={onClickInput}>
                <input style={{width: 40, height:40, textAlign: 'center', borderRadius: '0.5rem'}}
                    type="number"
                    onChange={(e) => setChap(e.target.value)}
                    value={chap}
                    required
                />
                <button style={{width: 80}}>Chọn</button>
            </form>

        </div>
    )
}
