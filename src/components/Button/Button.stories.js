import React from "react";

import Button from "./Button";

import { HiChevronRight } from "react-icons/hi";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      name: "variant",
    },
    size: {
      options: ["small", "regular", "large"],
      name: "size",
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "small",
  rightIcon: <HiChevronRight className="h-6 w-6" />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "large",
};
