import {
  Button, Card, Paper, Switch, Table, TextInput, Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateUserModal from "../../components/CreateUserModal";
import EditUserModal from "../../components/EditUserModal";
import {
  deleteUserApi,
  getAllUsersApi,
  searchUser,
  setSelectedUser,
  updateUserApi
} from "../../redux/actions/user.actions";
import { modals } from '@mantine/modals';
const Users = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const { editList } = useSelector((state) => state.users);
  const { token } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(getAllUsersApi(token));
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
            gap: "10px"
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
        <EditUserModal
          isOpen={openedEdit}
          handleClose={() => {
            setOpenEdit(false);
          }}
        />
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
                  <Switch
                    checked={elm.isActive}
                    onChange={(e) => {
                      dispatch(
                        updateUserApi(
                          elm._id,
                          {
                            isActive
                              : e.currentTarget.checked
                          },
                          token
                        )
                      );
                    }}
                  />
                </td>
                <td>
                  <Button
                    size={"sm"}
                    mr="sm"
                    color="red"
                    onClick={() => {
                      const openModal = () => modals.openConfirmModal({
                        title: 'Confirm',
                        children: (
                          <Text size="sm">
                            Est ce que vous voulez supprimer cet utilisateur
                          </Text>
                        ),
                        labels: { confirm: 'Confirmer', cancel: 'Annuler' },
                        onCancel: () => console.log('Cancel'),
                        onConfirm: () => dispatch(deleteUserApi(elm._id, token)),
                      });
                      openModal()
                    }}
                  >
                    <IconTrash />
                  </Button>
                  <Button size={"sm"} color="teal" onClick={() => {
                    dispatch(setSelectedUser(elm))
                    setOpenEdit(true);


                  }}>
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
