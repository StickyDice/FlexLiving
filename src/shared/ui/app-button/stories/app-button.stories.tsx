import { Meta } from "@storybook/react";
import { Story } from "~/shared/storybook/story";
import AppButton from "~/shared/ui/app-button/app-button";

const meta: Meta = {
  title: "Shared/UI/App button",
  component: AppButton,
};

export default meta;

/* -------------------------------------------------------------------------- */
/*                                  Template                                  */
/* -------------------------------------------------------------------------- */
export const Primary: Story = {
  args: {
    "vm.props.disabled": false,
  },
  render: (_props, globalData) => (
    <AppButton {...globalData.parsedProps}>Click me</AppButton>
  ),
};
