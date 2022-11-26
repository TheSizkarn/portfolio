import styled from "styled-components";

const ListSkills = styled.ul`
  margin-top: 2rem;
  display: none;

  &.active {
    display: block;
  }
  
  li {
    margin: 1rem 0;
    color: ${({theme}) => theme.textParagraph};
    line-height: 1.8rem;
    
    strong {
      color: ${({theme}) => theme.text};
    }
  }
`;

export default ListSkills;