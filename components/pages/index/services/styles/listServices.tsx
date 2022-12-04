import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const ListServices = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  
  li {
    max-width: 100%;
    flex: 0 0 100%;
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
    user-select: none;
    
    > div {
      background: ${({theme}) => theme.body};
      padding: 2rem;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
    }
  }
  
  h2 {
    font-size: 1.25rem;
    margin: 1.5rem 0;
  }

  span {
    display: inline-block;
    max-width: 3rem;
    width: 100%;
    max-height: 3rem;
    height: 100%;
  }
  svg {
    max-height: 3rem;
    fill: ${({theme}) => theme.textSecondary};
  }

  @media only screen and (min-width: ${breakpoints.minTablet}px) {
    li {
      max-width: 50%;
      flex: 0 0 50%;
    }
  }

  @media only screen and (min-width: ${breakpoints.minTabletLarge}px) {
    li {
      max-width: 33.333333%;
      flex: 0 0 33.333333%;
    }
  }
`;

export default ListServices;