import { Paper, Table, Card, Text, TextInput, Button } from "@mantine/core";
import React from "react";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import CreateUserModal from "../../components/CreateUserModal";
import { useDisclosure } from "@mantine/hooks";
const Users = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Paper style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Card
        p="xl"
        shadow={"md"}
        w={"100%"}
        mb={"sm"}
        display="flex"
        style={{ justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextInput placeholder="Rechercher" />
          <Button>Rechercher</Button>
        </div>
        <Button onClick={() => open()}>Ajouter nouveau utilisateur</Button>
        <CreateUserModal isOpen={opened} handleClose={close} />
      </Card>
      <Card p={"md"} shadow="md" m={"xs"}>
        <Table highlightOnHover withBorder>
          <thead>
            <tr>
              <th>id</th>
              <th>Nom & Prénom</th>
              <th>Adresse</th>
              <th>Email</th>
              <th>Numéro Tel</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td>Karmi Hazar</td>
              <td>Sidibouzid</td>
              <td>karmihazar@gmail.com</td>
              <td>12345677</td>
              <td>ADMIN</td>
              <td>ACTIVE</td>
              <td>
                <Button size={"sm"} mr="sm" color="red">
                  <IconTrash />
                </Button>
                <Button size={"sm"} color="teal">
                  <IconPencil />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Paper>
  );
};

export default Users;
