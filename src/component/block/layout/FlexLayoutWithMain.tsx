import React, {ReactChild, ReactChildren, ReactNode} from "react";
import StyledFlexContainer from "../../../storyExample/flex2/StyledFlexContainer";
import StyledFlexItemMain from "../../../storyExample/flex/StyledFlexItemMain";
import StyledFlexItemSection from "../../../storyExample/flex/StyledFlexItemSection";
import StyledViewportBox from "../../styledElement/box/viewport/StyledViewportBox";

interface flexLayoutWithMainProps {
    bgColorBox?: string;
    bgColorContainer?: string;
    bgColorMain?: string;
    bgColorSection?: string;

    directionRowContainer?: boolean,
    scrollContainer?: boolean,

    children: ReactNode;
}

const FlexLayoutWithMain = ({ bgColorBox, bgColorContainer, bgColorMain, bgColorSection, children, directionRowContainer = false, scrollContainer = true }: flexLayoutWithMainProps) => {

    let mainChild: ReactNode = null;
    let sectionChildren: Array<ReactNode> = [];
    React.Children.forEach(children, (child, idx) => {
        if(idx == 0) {
            mainChild = child;
        } else {
            sectionChildren.push(child);
        }
    });

    const sections = React.Children.map(sectionChildren, (child, idx) =>
        <StyledFlexItemSection >
            {child}
        </StyledFlexItemSection>
    );

    return (
        <StyledViewportBox bgColor={bgColorBox}>
            <StyledFlexContainer flexDirection={'column'} justifyContent={'space-between'} bgColor={bgColorContainer}>
                <StyledFlexItemMain >
                    {mainChild}
                </StyledFlexItemMain>
                {sections}
            </StyledFlexContainer>
        </StyledViewportBox>
    );
};

export default FlexLayoutWithMain;