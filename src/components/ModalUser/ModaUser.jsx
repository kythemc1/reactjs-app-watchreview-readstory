import styled, { keyframes } from "styled-components";
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {setShowModalUser} from "../../store/MoviesSlice/AuthSlice";
import Tabs from "../TabComponent/Tab"
function User(props) {
    const {  showModal } = props;
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(setShowModalUser(false));
    };
    const onClickToSignIn=()=>{

    }


    return (
        <ModalUser>
            <div
                className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
                onClick={handleCloseModal}>

            </div>
            <div
                className={`modal ${showModal ? "showModal" : "hideModal"}`}
                style={
                    showModal?
                   {
                            backgroundSize: "cover",
                        }:{}
                }
            >
                <div className="container">
                    <AiOutlineClose className="close" onClick={handleCloseModal} />
                    <Tabs></Tabs>
                </div>
            </div>
        </ModalUser>
    );
}

export default User;

const fadeIn = keyframes`
0%: {background:rgba(0,0,0,0)}
100%: {background: rgba(0,0,0,0.6)}
`;

const ModalUser = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }
  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    color: var(--color-white);
    height: 100%;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      justify-content: flex-end;
      width: 300px;
      height: 100%;
      background: #fff;
      .close {
        font-size: 30px;
      }
      margin-left: 70%;
      //@media screen and (max-width: 1184px)  {
      //  background: linear-gradient(
      //    90deg,
      //    rgba(0, 0, 0, 0.95) 40%,
      //    rgba(0, 0, 0, 0.733),
      //    transparent
      //  );
      //}
      //@media screen and (max-width: 980px) {
      //  //background: linear-gradient(
      //  //  90deg,
      //  //  rgba(0, 0, 0, 0.95) 50%,
      //  //  transparent
      //  //);
      //  //width: 100%;
      //}
      //@media screen and (max-width: 600px) {
      //  background: linear-gradient(
      //    90deg,
      //    rgba(0, 0, 0, 0.95) 60%,
      //    transparent
      //  );
      //}
      
    }
  }
  .showModal {
    //justify-content: flex-end;
    top: 10%;
    //left: 0;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
 
`;
