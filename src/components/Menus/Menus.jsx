import { FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiBandageRoll,
  GiGhost,
} from "react-icons/gi";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus() {
  return (
    <MenusPane>
      <MenuItem name="Netflix" Icon={SiNetflix} to="netflix" />
      <MenuItem name="Trending" Icon={FaHotjar} to="trending" />
      <MenuItem name="Top rated" Icon={FaStar} to="toprated" />
      <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to="action" />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedy" />
      <MenuItem name="horror Movies" Icon={GiGhost} to="horror" />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romance" />
      <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
    </MenusPane>
  );
}

export default Menus;

const MenusPane = styled.div`
  position: fixed;
  top: 20%;
  left: 0;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  width: 46px;
  overflow: hidden;

  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.5);
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;
    .icon {
      font-size: 30px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: #fff;
      }
    }
  }
`;
