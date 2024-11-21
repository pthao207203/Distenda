import { BannerKhAHC } from ".";

export default {
  title: "Components/BannerKhAHC",
  component: BannerKhAHC,
  argTypes: {
    property1: {
      options: ["mua", "chua-mua-2-hover", "ch-a-mua", "CHUA-MUA-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "mua",
    ANH: "https://c.animaapp.com/QBGC6C4y/img/anh-3@2x.png",
  },
};
