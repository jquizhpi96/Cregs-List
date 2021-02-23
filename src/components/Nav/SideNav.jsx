import { Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.nav`
  margin: 0px;
  .nav-links {
    display: flex;
    list-style: none;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
  }
  .Link:hover,
  .Linkform:hover {
    color: white;
  }

  .Link,
  .Linkform {
    text-decoration: none;
    font-size: 20px;
    padding: 10px 10px;
    color: #2ec4b6;
    transition: all ease-in-out 250ms;
  }

  .buttonform {
    margin-top: 0;
  }
  @media screen and (max-width: 800px) {
    .nav-links {
      position: fixed;
      background-color: #180b4d;
      height: 100vh;
      align-self: center;
      margin-top: 0;
      padding-left: 0;

      top: 0;
      left: 0;
      right: 0;
      flex-direction: column;
      z-index: 1;
      transform: ${({ open }) =>
        open ? `translateX(0%)` : `translateX(100%)`};
      transition: 0.3s ease-in-out;
    }
  }
`;

function SideNav({ open, burgerToggle }) {
  return (
    <Side open={open} burgerToggle={burgerToggle}>
      <ul className="nav-links">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
        <Link className="Linkform" to="/new">
          <button className="buttonform">Insert a Creg here!</button>
        </Link>
      </ul>
    </Side>
  );
}

export default SideNav;
