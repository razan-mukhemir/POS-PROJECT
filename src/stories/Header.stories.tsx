import Header from "../components/Header";

export default {
  title: "header/Header",
  component: Header,
};

export const categoryHeader = () => (
  <Header openAddPopup={() => {}} data={[]} setData={() => {}} felterTerm="" />
);
