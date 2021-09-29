import Header from "../components/header/Header";

export default {
  title: "header/Header",
  component: Header,
};

export const categoryHeader = () => (
  <Header
    openAddPopup={() => {}}
    data={[]}
    setData={() => {}}
    felterTerm=""
    resetData={() => {}}
  />
);
