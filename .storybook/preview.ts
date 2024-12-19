import type { Preview } from "@storybook/angular";
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  decorators: withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
