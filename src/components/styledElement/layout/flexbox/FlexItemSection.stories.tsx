import StyledFlexItemSection, { StyledFlexItemSectionProps } from "./StyledFlexItemSection";
import { ComponentMeta, ComponentStory } from "@storybook/react";

function WrapperStyled(props: StyledFlexItemSectionProps) {
    return <StyledFlexItemSection {...props} />;
}

export default {
    title: 'components/styledElement/layout/flexbox',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SFlexItemSection = Template.bind({});

export { SFlexItemSection };