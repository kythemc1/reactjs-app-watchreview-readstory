import LogoNetflix from "../../assets/images/logo_netflix.png";
import ic_user2 from "../../assets/images/ic_user2.png"
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useScrollY } from "../../CustomHooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import User from "../ModalUser/ModaUser";
import {useDispatch, useSelector} from "react-redux";
import {setShowModalUser} from "../../store/MoviesSlice/AuthSlice";

function Navbar() {
  const [scrollY] = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const {isShowModalUser}= useSelector((state)=>state.authInfo);
  const dispatch=useDispatch();
  const onClickUSer=()=>{
    dispatch(setShowModalUser(true));
  }
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate("/");
    }
  };

  const goHome = () => {
    navigate("/");
    setKeywords("");
  };

  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background" }
      }
    >
      <div className="navContainer">
        {/* img */}
        <div className="navSub">
          <div className="navLogo" onClick={goHome}>
            <img src={LogoNetflix} alt="logo netflix" />
          </div>
          {/* input */}
          <div className="navSearch" style={{ display: "flex", alignItems: "center" }}>
      <MdSearch className="iconSearch" />
      <input
        type="text"
        placeholder="    Input title, genres, people"
        onChange={handleChangeInput}
        value={keywords}
        style={{
          marginTop: "8px",
          marginLeft: "-30px", // Adjust the margin as needed
          width: "500px",
          padding: "10px",
          fontSize: "20px",
          border: "none",
          borderRadius: "8px",
          outline: "none",
        }}
      />
    </div>
        </div>
          <div className="navUser" onClick={onClickUSer}>
              <img src={ic_user2} alt="logo netflix" />
          </div>
          <div className="navModal">
              <User showModal={isShowModalUser ? true : false} ></User>
          </div>
      </div>
    </Navigation>
  );
}

export default Navbar;
const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%; /* Set width to 100% to make it full-width */
  z-index: 10;
  transition: all 0.3s linear;
  @media (max-width: 1200px) {
    height: 100px;
  }
  .navContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 12px 5%;
    background-color: black;

    .navSub {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      padding: 12px 5%;
      @media (max-width: 400px) {
        flex-direction: column;
      }
    }
    .navLogo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
   
  .navUser {
    position: relative;
    width: 100px;
    cursor: pointer;
    img {
      width: 40%;
    }
    margin-left: auto;
  }

  .navModal {
   
  }

    .navSearch {
      color: white;
      padding-right: 30px; // Tăng khoảng cách bên phải nếu cần thiết
      display: flex;
      align-items: center;
      justify-content: flex-end;
  
      .iconSearch {
        width: 30px;
        height: 30px;
        cursor: pointer;
        color: #bbb;
        margin-left: 100px; // Thêm margin để di chuyển biểu tượng về phải
      }
  
      &:hover .iconSearch {
        color: white;
      }
      input {
        outline: none;
        border: 1px solid #fff;
        color: white;
        font-size: 14px;
        padding: 10px 30px;
        background-color: #222;
        cursor: pointer;
        width: 0;
        opacity: 0;
        transition: all 0.4s ease-in;
        &:focus {
          width: 300px;
          opacity: 1;
          padding-right: 100px;
          border-radius: 10px;
          cursor: text;
        }
      }
    }
   
  }
`;