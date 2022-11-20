import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Title = styled.h1`
  padding: 0 2rem 0 2rem;
  font-size: 3.5rem;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.3;
  
  .carousel {
    height: 68px;
    line-height: 68px;
    overflow: hidden;
  }
  
  ul {
    margin: 0;
    padding: 0;
    li {
      animation: topToBottom 18s linear infinite 0s;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      margin: 0;
      padding: 0;
      
      &:nth-child(2) {
        animation-delay: 3s;
      }
      &:nth-child(3) {
        animation-delay: 6s;
      }
      &:nth-child(4) {
        animation-delay: 9s;
      }
      &:nth-child(5) {
        animation-delay: 12s;
      }
      &:nth-child(6) {
        animation-delay: 15s;
      }
    }
  }
  
  strong {
    color: ${({theme}) => theme.textSecondary};
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    font-size: 2.5rem;
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: ${breakpoints.maxMobile}px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${breakpoints.maxSmallMobile}px) {
    font-size: 1.5rem;
  }

  @keyframes topToBottom {
    0% {
      opacity: 0;
    }

    5% {
      opacity: 0;
      transform: translateY(40px);
    }

    10% {
      opacity: 1;
      transform: translateY(0px);
    }

    20% {
      opacity: 1;
      transform: translateY(0px);
    }

    25% {
      opacity: 0;
      transform: translateY(-40px);
    }

    30% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;

export default Title;