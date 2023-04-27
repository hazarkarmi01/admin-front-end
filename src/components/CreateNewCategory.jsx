import { Modal, TextInput, Checkbox, Group, Button } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserApi } from "../redux/actions/user.actions";
import { createNewCategoryApi } from "../redux/actions/category.actions";

const CreateNewCategory = ({ handleClose, isOpen }) => {
  const { token } = useSelector(({ auth }) => auth);
  const [categoryData, setcategoryData] = useState({
    name: ""
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setcategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      title="Ajouter nouvelle categorie"
      centered
    >
      <TextInput
        placeholder="Nom de categorie"
        label="Nom de categorie"
        withAsterisk
        mb={"sm"}
        name="name"
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
            dispatch(createNewCategoryApi(categoryData, token));
            handleClose();
          }}
        >
          Confirmer
        </Button>
      </Group>
    </Modal>
  );
};

export default CreateNewCategory;
