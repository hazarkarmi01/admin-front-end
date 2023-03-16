import {
  Paper,
  Table,
  Card,
  Text,
  TextInput,
  Button,
  Switch,
} from "@mantine/core";
import React, { useEffect } from "react";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import CreateUserModal from "../../components/CreateUserModal";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersApi, searchUser } from "../../redux/actions/user.actions";
const Users = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const { editList } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsersApi());
  }, []);
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
          <TextInput
            placeholder="Rechercher"
            onChange={(e) => {
              dispatch(searchUser(e.target.value));
            }}
          />
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
            {editList.map((elm, ind) => (
              <tr key={elm._id}>
                <td>{ind + 1}</td>
                <td>
                  {elm.firstName} {elm.lastName}
                </td>
                <td>{elm.address}</td>
                <td>{elm.email}</td>
                <td>{elm.phoneNumber}</td>
                <td>{elm.role}</td>
                <td>
                  <Switch value={elm.isActive} />
                </td>
                <td>
                  <Button size={"sm"} mr="sm" color="red">
                    <IconTrash />
                  </Button>
                  <Button size={"sm"} color="teal">
                    <IconPencil />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Paper>
  );
};

export default Users;
