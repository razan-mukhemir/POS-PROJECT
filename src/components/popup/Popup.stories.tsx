import Popup from "./Popup";
import { Story, Meta } from "@storybook/react";
import CategoryForm from "../../pages/categories/CategoryForm";
import ProductInfo from "../../pages/products/ProductInfo";
import CategoryInputProps from "../../pages/categories/type";
import { PopupProps } from "./type";
import { ReactNode } from "react";

export default {
  title: "dialogs/Popup",
  component: Popup,
  args: {
    openPopup: {
      isOpen: true,
      title: "Add Category Form",
      onSubmit: () => {},
    },
    setOpenPopup: () => {},
  },
} as Meta;

const Template: Story<
  JSX.IntrinsicAttributes & {
    children: ReactNode;
    openPopup: PopupProps<CategoryInputProps>;
    setOpenPopup: any;
  } & { children?: ReactNode }
> = (args) => <Popup {...args}></Popup>;

export const popupForm = Template.bind({});

export const popupViewInfo = Template.bind({});

popupForm.args = {
  children: (
    <CategoryForm
      editOrAdd=""
      inputField={{ id: 0, categoryName: "", createdAt: "" }}
      onSubmit={() => {}}
      categories={[]}
    />
  ),
};

popupViewInfo.args = {
  openPopup: {
    isOpen: true,
    title: "View Product Info",
    onSubmit: () => {},
  },
  setOpenPopup: () => {},
  children: (
    <ProductInfo
      productInfo={{
        id: 0,
        name: "p1",
        rawPrice: 10,
        price: 20,
        code: "ABC-abc-1234",
        color: "red",
        image: "",
        categoryName: "c1",
        description: "d1",
        stockCount: 5,
        expirationDate: new Date(),
      }}
    />
  ),
};
