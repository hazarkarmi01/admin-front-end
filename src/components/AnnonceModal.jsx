import {
  Badge,
  Flex,
  Group,
  Image,
  Modal,
  Title,
  Text,
  createStyles,
  Button
} from "@mantine/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "@mantine/carousel";
import { deleteAnnonce } from "../redux/actions/annonce.actions";
const useStyles = createStyles((theme) => ({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.colors.blue["5"],
    fontSize: 17,
    fontWeight: 600,
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
}));
const AnnonceModal = ({ isOpen, handleClose }) => {
  const { selectedAnnonce } = useSelector((state) => state.annonce);
  const { token } = useSelector((state) => state.auth);
  const { classes } = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    if (selectedAnnonce) {
    }
  }, [selectedAnnonce]);
  const handleDelete = () => {
    if (selectedAnnonce) {
      dispatch(deleteAnnonce(selectedAnnonce._id, token)); 
      handleClose(); 
    }
  }
  return (
    <Modal opened={isOpen} onClose={handleClose} size={"lg"}>
      <Carousel maw={"100%"} mx="auto" withIndicators height={300}>
        {selectedAnnonce &&
          selectedAnnonce.photos.map((ph) => (
            <Carousel.Slide>
              <Image src={ph} alt="No image" w={"100%"} h={"100%"} fit="contain" />
            </Carousel.Slide>
          ))}
      </Carousel>
      <Flex direction={"column"} w={"100%"} h={"100%"} mt={10} p={20} gap={10}>
        <Group>
          <Badge size="lg">
            {selectedAnnonce &&
              `${selectedAnnonce.category.name} / ${selectedAnnonce.subCategory.name}`}
          </Badge>
        </Group>
        <Flex w={"100%"} justify={"space-between"} align={"center"}>
          <Title size={"sm"}>{selectedAnnonce && selectedAnnonce.title}</Title>
          <Badge
            color={
              selectedAnnonce && selectedAnnonce.isLost
                ? "red"
                : selectedAnnonce && !selectedAnnonce.isLost
                  ? "teal"
                  : "blue"
            }
          > {selectedAnnonce && selectedAnnonce.isLost ? "Element Perdu" : "Element Trouvé"}</Badge>
        </Flex>
        <Text>{selectedAnnonce && selectedAnnonce.description}</Text>
        <Group mt="lg">
          <div className={classes.avatar}>
            {selectedAnnonce &&
              `${selectedAnnonce.createdBy.lastName[0]}${selectedAnnonce.createdBy.firstName[0]} `}
          </div>
          <div>
            <Text fw={500}>
              {selectedAnnonce &&
                `${selectedAnnonce.createdBy.lastName} ${selectedAnnonce.createdBy.firstName} `}
            </Text>
            <Text fz="xs" c="dimmed">
              {selectedAnnonce && selectedAnnonce.createdAt}
            </Text>
          </div>
        </Group>
        <Flex w={"100%"} align={"center"} justify={"flex-end"} gap={10}>
          <Button w={110} onClick={handleClose}>
            Quitter
          </Button>
          <Button color="red" w={110} onClick={handleDelete}>
            Supprimer
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AnnonceModal;
