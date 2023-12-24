import { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {API} from "../../constants/API";
export default function Tabs() {
    const [userLogin, setUserLogin] = useState('');
    const [pwdLogin, setPwdLogin] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const onClickButtonLogin=(e)=>{
        e.preventDefault();
        console.log(API.API_LOGIN);
        try {
            axios.post(API.API_LOGIN,
               {
                   userLogin,
                   pwdLogin,
               },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '/',
                        'Access-Control-Allow-Origin':'*'
                        },
                    withCredentials:false,
                }

            ).then(res=>console.log(res+' 12222222222'));

            console.log('resonseeeeeeeeeeeee');
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
    const formLogin=()=>{
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
                <form >
                    <label htmlFor="password">Username:</label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={user}
                        required
                        // aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                    />

                    <label htmlFor="text">Email:</label>
                    <input
                        type="text"
                        id="confirm_pwd"
                        // onChange={(e) => setMatchPwd(e.target.value)}
                        // value={matchPwd}
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
`

