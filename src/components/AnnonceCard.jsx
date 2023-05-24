import { Button, Card, Group, Image, Text, createStyles } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_ANNONCE } from "../redux/actions/actionTypes";
import { deleteAnnonce } from "../redux/actions/annonce.actions";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

const AnnonceCard = ({
  image,
  category,
  title,
  date,
  author,
  annonce,
  handleOpenModal,
}) => {
  const { classes } = useStyles();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch({
      type: SET_SELECTED_ANNONCE,
      payload: annonce,
    });
    handleOpenModal();
  };

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              {/* <Avatar size={20} src={author.avatar} /> */}
              <Text size="xs">{author}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
          <Group position="apart" mt={10}>
            <Button onClick={handleSelect}>Consulter</Button>
            <Button
              color="red"
              onClick={() => {
                const openModal = () =>
                  modals.openConfirmModal({
                    title: "Confirm",
                    children: (
                      <Text size="sm">
                        Est ce que vous voulez supprimer cette Annonce
                      </Text>
                    ),
                    labels: { confirm: "Confirmer", cancel: "Annuler" },
                    onCancel: () => console.log("Cancel"),
                    onConfirm: () =>
                      dispatch(deleteAnnonce(annonce._id, token)),
                  });
                openModal();
              }}
            >
              Supprimer
            </Button>
          </Group>
        </div>
      </Group>
    </Card>
  );
};
export default AnnonceCard;
