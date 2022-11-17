import styled from "styled-components";

const Container = styled.section`
  background: ${({theme}) => theme.bodySecondary};
  height: 600px;
  display: flex;
  align-items: center;
`;

export default Container