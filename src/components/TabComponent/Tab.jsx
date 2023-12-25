import { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {API} from "../../constants/API";
import {setAuth, setLogged} from "../../store/MoviesSlice/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import ic_user from "../../assets/images/ic_user.png";
export default function Tabs() {
    const [userLogin, setUserLogin] = useState('');
    const [pwdLogin, setPwdLogin] = useState('');
    const [userSignUp,setUserSignUp]=useState('');
    const [emailSignUp,setEmailSignUp] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const {isLogged,username} = useSelector((state) => state.authInfo)
    const dispatch = useDispatch();

    const onClickButtonLogin=(e)=>{
        e.preventDefault();
        console.log(API.API_LOGIN);
        try {
            axios({
                method: "post",
                url:API.API_LOGIN,
                data:{
                    "username":"hieuthu3",
                    "password": "1234"
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: false,
             }

                // }
        ).then(res=>
                {
                    const password =pwdLogin;
                    const username = userLogin;
                    const accessToken = res?.data?.accessToken;
                    const refreshToken = res?.data?.refreshToken;

                    const roles = res?.data?.roles;
                    const arr = new  Array(username)
                    dispatch(setAuth(arr));
                    dispatch(setLogged(true));
                    setUserLogin('');
                    setPwdLogin('');
                    setSuccess(true);
                }
            );

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }
    const onClickButtonSignUp=(e)=>{
        e.preventDefault();
        console.log(API.API_SIGN_UP);
        try {
            axios({
                    method: "post",
                    url:API.API_SIGN_UP,
                    data:{
                        "UserId": 13,
                        "firstName": "nguyen",
                        "lastname": "chi hieu 2",
                        "email" : "1@gmail.com",
                        "age": "12",
                        "address": "ha noi",
                        "username": "1",
                        "password": "",
                        "phoneNumber": "1234567899",
                        "listRole": ["admin","user"]
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: false,
                }

                // }
            ).then(res=>console.log(res.data+' 12222222222'));




            // const accessToken = response?.data?.accessToken;
            // const refreshToken = response?.data?.refreshToken;
            // const roles = response?.data?.roles;
            // setAuth({ userLogin, pwdLogin, roles, accessToken ,refreshToken});
            setUserLogin('');
            setPwdLogin('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
        console.log('logggggggggg'+userLogin+'ádasdas'+pwdLogin);
    }

    const onClickLogout=()=>{
        const username = null;
        const password = null;
        const accessToken = null;
        const refreshToken = null;
        const roles = [];
        const arr =new Array(username, password, accessToken ,refreshToken, roles)
        dispatch(setAuth(arr));
        dispatch(setLogged(false));
    }
    const formLogin=()=>{
        console.log(isLogged);
        return(

            <section>
                <form onSubmit={onClickButtonLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUserLogin(e.target.value)}
                            value={userLogin}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwdLogin(e.target.value)}
                        value={pwdLogin}
                        required
                    />
                    <button >Sign In</button>
                </form>
            </section>
        )
    }
    const formSignUp=()=>{
        return(
            <section>
                <form onSubmit={onClickButtonSignUp}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUserSignUp(e.target.value)}
                        value={userSignUp}
                        required
                        // aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                    />

                    <label htmlFor="text">Email:</label>
                    <input
                        type="text"
                        id="confirm_pwd"
                        onChange={(e) => setEmailSignUp(e.target.value)}
                        value={emailSignUp}
                        required

                    />


                    <button>Sign Up</button>
                </form>

            </section>
        )
    }

    const [toggleState,setToggleSate]=useState(1);
    const toggleTab=(index)=>{
        setToggleSate(index);
    }
    return(
            <Tab>
                {
                    !isLogged ? <div>
                        <div>
                            <h className='welcome-text'>Chào Khách</h>
                        </div>
                        <div className="header" >
                            <div onClick={()=>{toggleTab(1)}}
                                 className={toggleState==1?"tabs-actives":"tabs"}>
                                Sign In
                            </div>
                            <div onClick={()=>{toggleTab(2)}}
                                 className={toggleState==2?"tabs-actives":"tabs"}>
                                Sign Up
                            </div>
                        </div>
                        <div className="container-form">
                            <div className={toggleState==1?"content-active":"content"}>
                                {formLogin()}
                            </div>
                            <div className={toggleState==2?"content-active":"content"}>
                                {formSignUp()}
                            </div>
                        </div>
                    </div> :
                        <div style={{width:300}}>
                            <div className="navUser">
                                <img src={ic_user} alt="icon-user" />

                            </div>
                            <p className="textHello">
                                Xin chào : {username} !
                            </p>
                            <div className="buttonSignOut">
                                <button style={{alignSelf:"center"}} onClick={onClickLogout}>Logout</button>

                            </div>
                        </div>
                }
        </Tab>



    )
}

const Tab = styled.div`
  .header{
    display: flex;
    margin-top: 30px;
  }
  .tabs{
    color: gray;
    background-color: white;
    width: 150px;
    text-align: center;
    font-weight: bolder;
  }
  .tabs-actives{
    color: black;
    background-color: white;
    width:150px;
    text-align: center;
    font-weight: bolder;
  }
  .content{
    display: none;
  }
  .content-active{
    display: block;
    //text-align: center;
    top: 20px;
  }
  .title{fontSize:20;color: black;justify-content: center;top: 30px}
  .label{justify-content: flex-start}
  .container-form{
    top: 30px;
  }
  .welcome-text{
    color: black;
    font-size: 14px;
    margin-left: 14px;
  }
  .navUser{
    width: 100px;
    img {
      width: 40%;
    }
    justify-content: center;
  }
  .textHello{
    color: black;
    margin-left: 10px;
  }
  .buttonSignOut{
    text-align: center;
  }
`

