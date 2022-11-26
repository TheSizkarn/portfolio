import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const NavSkills = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  border: 1px solid #5d5d5d;
  border-radius: 50px;

  li {
    span {
      display: inline-block;
      font-weight: 600;
      cursor: pointer;
      padding: 1rem 1.5rem;
      margin: -1px -2px -1px;
      border-radius: 50px;
      background-color: transparent;
      transition: background-color .2s ease-out;
    }

    &.active {
      span {
        background-color: ${({theme}) => theme.textSecondary};
      }
    }
  }

  @media only screen and (max-width: ${breakpoints.maxMobile}px) {
    border: none;
  }
`

export default NavSkills;