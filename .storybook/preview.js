import '!style-loader!css-loader!resolve-url-loader!sass-loader!../projects/core/styles/styles.scss';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
  }
}
