import styled from "styled-components";

const TitleH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.text};
  margin-bottom: 2rem;
`;

export default TitleH2;