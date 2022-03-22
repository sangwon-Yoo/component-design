import styled from "styled-components";

const StyledFlexContainer = styled.div<{bgColor?: string;}>`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;       //넘치면 스크롤
  display: flex;          
  flex-direction: column;
  background-color: ${props => props.bgColor || props.theme.color.bg.primary};
`;

export default StyledFlexContainer;