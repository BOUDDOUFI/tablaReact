import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  box-shadow: 0 2px 10px 2px rgba(10, 9, 8, 0.1);
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5 rem calc((100vw- 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-family: Nexa;
  font-style: normal;
  font-weight: 800;
  color: #0a0908;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
