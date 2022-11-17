import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints";
import Cross from "./cross";

const Nav = styled.nav`
  @media only screen and (min-width: ${breakpoints.minTabletLarge}px) {
    margin-right: 1.5rem;

    ul {
      display: flex;
      align-items: center;
      padding: 0;

      li {
        margin-right: 1.5rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    position: fixed;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0,0,0,.8);
    transition: opacity .5s ease-out;

    ${Cross} {
      display: none;
    }
    
    ul {
      position: relative;
      z-index: 999;
      right: -150px;
      opacity: 0;
      max-width: 250px;
      width: 100%;
      height: 100%;
      padding: 2rem 1rem;
      margin: 0 0 0 auto;
      background: ${({theme}) => theme.body};
      transition: all .5s ease-out;

      li {
        display: block;
        padding: .75rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        
        &:last-child {
          border-bottom: none;
        }
        
        a {
          display: block;
        }
      }
    }
    
    &.open {
      opacity: 1;
      visibility: visible;

      ${Cross} {
        display: flex;
      }
      
      ul {
        right: 0;
        opacity: 1;
        overflow-y: auto;
      }
    }
  }
`;

export default Nav;