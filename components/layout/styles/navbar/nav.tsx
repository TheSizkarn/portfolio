import styled from "styled-components";

const Nav = styled.nav`
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
`;

export default Nav;