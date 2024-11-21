import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-65", "variant-2", "variant-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "About Us",
    property1: "frame-65",
    className: {},
    divClassName: {},
  },
};
