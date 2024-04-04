import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderStyled = styled.header`
  /* top: 0;
  right: 0;
  position: fixed;
 width: 100%; */
  display: flex;
  gap: 50px;
  align-items: baseline;
  font-size: 18px;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;