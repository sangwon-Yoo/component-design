import styled, {css} from "styled-components";
import { isMobile } from "../../../../style/mediaQuery";

interface StyledTransparentAnchorProps {
    width?: string;
    height?: string;
    color?: string;
    fontSize?: string;
}
export const StyledTransparentAnchor = styled.a<StyledTransparentAnchorProps>`
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 4px;
    border: 2px solid ${props => props.color || '#ffffff'};
    border-radius: 2px;
    background-color: transparent;
    color: ${props => props.color || '#ffffff'};
    font-size: ${props => props.fontSize};
    cursor: pointer;
    transition: background-color .12s ease;
    
    :hover {
        color: black;
        background-color: ${props => props.color || '#ffffff'};
    }
`;


interface StyledFlexAnchorProps {
    flexDirection?: string; //default : row
    justifyContent?: string; //default : flex2-start
    alignItem?: string; //default : stretch
    flexWrap?: string; //default : no-wrap

    flex?: string;  //flex2 item 도 가능
}
export const StyledFlexAnchor = styled.a<StyledFlexAnchorProps>`
  
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
    flex-wrap: ${props => props.flexWrap};
  
    flex: ${props => props.flex};
`;

interface StyledFlexIconAnchorProps extends StyledFlexAnchorProps {
    margin?: string;
    padding?: string;
    noHover?: boolean;
    borderRadius?: string;
}
export const StyledFlexIconAnchor = styled(StyledFlexAnchor)<StyledFlexIconAnchorProps>`
  
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
  
    border-radius: ${props => props.borderRadius || '2px'};
    transition: background-color .12s ease;
  
    ${props => (props.noHover !== true) && css`
      &:hover {
        background-color: #ececeb;
      }

      ${isMobile} {
        &:hover {
          background-color: unset;
          & .hover-able {
            color: ${props => props.theme.color.signature.pointer};
          }
        }
      }
    `};
`;