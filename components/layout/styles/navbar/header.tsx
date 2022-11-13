import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.body};
  transition: background 0.2s ease-in, color 0.2s ease-in;
  box-shadow: 0 2px 3px rgba(0,0,0,.2);
  padding: 1rem 1.5rem;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .header-right {
    display: flex;
    align-items: center;
  }
`;

export default Header;