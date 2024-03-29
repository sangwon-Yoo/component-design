import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "../src/style/globalStyle";
import { myBlogTheme } from '../src/style/themes';
import { withThemes } from "@react-theming/storybook-addon/dist/preview";

/*
addDecorator(story => <><GlobalStyle />{story()}</>);
addDecorator(withThemes(ThemeProvider, [myBlogTheme]));
*/

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //++ storybook sb-main-padded 클래스 padding 제거
  layout: 'fullscreen',
}

export const decorators = [
  (Story) => (
      <ThemeProvider theme={myBlogTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
  ),
];