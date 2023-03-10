import { Modal, TextInput, Checkbox, Group, Button } from "@mantine/core";
import React from "react";

const CreateUserModal = ({ handleClose, isOpen }) => {
  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      title="Ajouter nouveau utilisateur"
      centered
    >
      <TextInput placeholder="Nom" label="Nom" withAsterisk mb={"sm"} />
      <TextInput placeholder="Prénom" label="Prénom" withAsterisk mb={"sm"} />
      <TextInput placeholder="Adresse" label="Adresse" withAsterisk mb={"sm"} />
      <TextInput placeholder="Email" label="Email" withAsterisk mb={"sm"} />
      <TextInput
        placeholder="Mot de passe"
        label="Mot de passe"
        withAsterisk
        mb={"sm"}
      />
      <TextInput
        placeholder="Téléphone"
        label="Téléphone"
        withAsterisk
        mb={"sm"}
      />
      <Checkbox label="Admin" mb={"sm"} />
      <Group
        mt="xl"
        align={"flex-end"}
        display="flex"
        style={{ justifyContent: "flex-end" }}
      >
        <Button variant="outline" color={"red"} onClick={()=>handleClose()}>
          Annuler
        </Button>
        <Button variant="outline"  onClick={()=>handleClose()}>
          Confirmer
        </Button>
      </Group>
    </Modal>
  );
};

export default CreateUserModal;
