import {
  Button, Card, Flex, Paper,
  TextInput
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnnonceCard from "../../components/AnnonceCard";
import AnnonceModal from "../../components/AnnonceModal";
import { getAllAnnonceApi } from "../../redux/actions/annonce.actions";
import {
  searchUser
} from "../../redux/actions/user.actions";
const Annonce = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const dispatch = useDispatch();
  const { editList } = useSelector((state) => state.annonce);
  const { token } = useSelector(({ auth }) => auth);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    dispatch(getAllAnnonceApi(token));
  }, []);
  const handleOpenModal = () => {
    setIsOpen(true);

  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <Paper style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <AnnonceModal isOpen={isOpen} handleClose={handleCloseModal}/>
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
       
      </Card>
      <Card p={"md"} shadow="md" m={"xs"}>
        <Flex w={"100%"} h={"100%"} p={10} gap={10}>
          {
            editList.map((elm) => <AnnonceCard handleOpenModal={handleOpenModal} key={elm._id} annonce={elm} image={elm.photos[0]} category={elm.category.name} title={elm.title} date={elm.createdAt} author={`${elm.createdBy.firstName} ${elm.createdBy.lastName}`} />)
          }
        </Flex>
      </Card>
    </Paper>
  );
};

export default Annonce;
