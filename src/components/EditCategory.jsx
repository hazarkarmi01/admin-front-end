import { Button, Group, Modal, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryName } from "../redux/actions/category.actions";

const EditCategory = ({ handleClose, isOpen, categ }) => {
  const { token } = useSelector(({ auth }) => auth);
  const [categoryData, setcategoryData] = useState({
    name: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setcategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (categ) {
      console.log("Categ", categ);
      setcategoryData({ name: categ.name });
    }
  }, [categ]);
  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      title="modifier categorie"
      centered
    >
      <TextInput
        placeholder="Nom de categorie"
        label="Nom de categorie"
        withAsterisk
        mb={"sm"}
        name="name"
        value={categoryData.name}
        onChange={handleChange}
      />

      <Group
        mt="xl"
        align={"flex-end"}
        display="flex"
        style={{ justifyContent: "flex-end" }}
      >
        <Button variant="outline" color={"red"} onClick={() => handleClose()}>
          Annuler
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            dispatch(updateCategoryName(categoryData.name, categ._id, token));
            handleClose();
          }}
        >
          Confirmer
        </Button>
      </Group>
    </Modal>
  );
};

export default EditCategory;
