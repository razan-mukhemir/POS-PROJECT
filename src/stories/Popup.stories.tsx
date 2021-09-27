import Popup from "../components/Popup";
import CategoryForm from "../pages/categories/CategoryForm";

export default {
  title: "dialogs/Popup",
  component: Popup,
};

export const addCategoryPopup = () => (
  <Popup
    openPopup={{
      isOpen: true,
      title: "Add Category Form",
      onSubmit: () => {},
    }}
    setOpenPopup={() => {}}
  >
    <CategoryForm
      editOrAdd=""
      inputField={{ categoryName: "", createdAt: "" }}
      onSubmit={() => {}}
      categories={[]}
    />
  </Popup>
);
export const editCategoryPopup = () => (
  <Popup
    openPopup={{
      isOpen: true,
      title: "edit Category Form",
      onSubmit: () => {},
    }}
    setOpenPopup={() => {}}
  >
    <CategoryForm
      editOrAdd=""
      inputField={{ categoryName: "", createdAt: "" }}
      onSubmit={() => {}}
      categories={[]}
    />
  </Popup>
);
