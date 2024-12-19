import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },

  //👈 Configures the static asset folder in Storybook
  staticDirs: ['../public'],

  docs: {},
};
export default config;
