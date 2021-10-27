import Header from "./TableHeader";
import Button from "@material-ui/core/Button";
import { HeaderProps } from "./type";
import { Story, Meta } from "@storybook/react";
import { ReactNode } from "react";

export default {
  title: "header/Header",
  component: Header,
} as Meta;

const Template: Story<
  JSX.IntrinsicAttributes & HeaderProps<object> & { children?: ReactNode }
> = (args) => <Header {...args}></Header>;

export const tableHeader = Template.bind({});

tableHeader.args = {
  openAddPopup: () => {},
  data: [],
  setData: () => {},
  felterTerm: "",
  resetData: () => {},
  children: (
    <Button color="primary" variant="contained">
      Addd Category
    </Button>
  ),
};
