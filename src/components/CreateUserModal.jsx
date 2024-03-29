import {
  Modal,
  TextInput,
  Checkbox,
  Group,
  Button,
  PasswordInput,
} from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserApi } from "../redux/actions/user.actions";

const CreateUserModal = ({ handleClose, isOpen }) => {
  const { token } = useSelector(({ auth }) => auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      title="Ajouter nouveau utilisateur"
      centered
    >
      <TextInput
        placeholder="Nom"
        label="Nom"
        withAsterisk
        mb={"sm"}
        name="firstName"
        onChange={handleChange}
      />
      <TextInput
        placeholder="Prénom"
        label="Prénom"
        withAsterisk
        mb={"sm"}
        name="lastName"
        onChange={handleChange}
      />
      <TextInput
        placeholder="Adresse"
        label="Adresse"
        withAsterisk
        mb={"sm"}
        name="address"
        onChange={handleChange}
      />
      <TextInput
        placeholder="Email"
        label="Email"
        withAsterisk
        mb={"sm"}
        name="email"
        onChange={handleChange}
      />
      <PasswordInput
        placeholder="Mot de passe"
        label="Mot de passe"
        withAsterisk
        mb={"sm"}
        name="password"
        onChange={handleChange}
      />
      <TextInput
        placeholder="Téléphone"
        label="Téléphone"
        withAsterisk
        mb={"sm"}
        name="phoneNumber"
        onChange={handleChange}
      />
      <Checkbox
        label="Admin"
        mb={"sm"}
        checked={isAdmin}
        onChange={(e) => setIsAdmin(e.currentTarget.checked)}
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
            dispatch(createUserApi({ ...userData, isAdmin }, token));
            handleClose();
          }}
        >
          Confirmer
        </Button>
      </Group>
    </Modal>
  );
};

export default CreateUserModal;
