import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import type { Preview } from "@storybook/react";
import { recursiveNestedProps } from "~/shared/utils/recursive-nested-props";

const preview: Preview = {
  decorators: [
    (Story, data) => {
      const parsedProps = {} as Record<string, unknown>;
      const props = data.allArgs;
      Object.entries(props).forEach((prop) => {
        const [key, value] = prop;
        if (!key.includes("vm")) {
          parsedProps[key] = value;
          return;
        }
        const splitedKey = key.split(".");

        recursiveNestedProps(parsedProps, splitedKey, value);
      });

      return (
          <Story parsedProps={parsedProps} />
      );
    },
  ],
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
