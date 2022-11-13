import styled from "styled-components";

const Logo = styled.div`
  max-width: 230px;
  
  a, svg {
    width: 100%;
  }
  
  svg {
    fill: ${({ theme }) => theme.text};
  }
`;

export default Logo;