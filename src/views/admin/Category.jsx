import { Button, Card, Grid, Paper, TextInput, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import CreateNewCategory from "../../components/CreateNewCategory";
import {
  deleteCategoryApi,
  getCategoryList,
  setSelectedCateg
} from "../../redux/actions/category.actions";
import { searchUser } from "../../redux/actions/user.actions";
import SubCategoryModal from "../../components/SubCategoryModal";
import { modals } from '@mantine/modals'
const Category = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedEdit, setOpenEdit] = useState(false);
  const [subEditOpen, setSubEditOpen] = useState(false);
  const dispatch = useDispatch();
  const { editList } = useSelector((state) => state.category);
  const { token } = useSelector(({ auth }) => auth);
  const handleManageSub = (category) => {
    dispatch(setSelectedCateg(category));
    setSubEditOpen(true);
  };
  useEffect(() => {
    dispatch(getCategoryList(token));
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
        <Button onClick={() => open()}>Ajouter nouvelle categorie</Button>
        <CreateNewCategory isOpen={opened} handleClose={close} />
        <SubCategoryModal
          isOpen={subEditOpen}
          handleClose={() => {
            setSubEditOpen(false);
            dispatch(setSelectedCateg(null));
          }}
        />
        {/* <EditUserModal
          isOpen={openedEdit}
          handleClose={() => {
            setOpenEdit(false);
          }}
        /> */}
      </Card>
      {/* <Card p={"md"} shadow="md" m={"xs"}> */}
      <Paper p={"lg"} m="xs">
        <Grid cols={3} spacing={10}>
          {editList.map((category) => (
            <Grid.Col style={{ maxWidth: 300 }}>
              <CategoryCard
                category={category.name}
                subcategories={category.subCategories.length}
                onEdit={() => console.log(`Edit category ${category.name}`)}
                onDelete={() => {
                  const openModal = () => modals.openConfirmModal({
                    title: 'Confirm',
                    children: (
                      <Text size="sm">
                        Est ce que vous voulez supprimer cette categorie
                      </Text>
                    ),
                    labels: { confirm: 'Confirmer', cancel: 'Annuler' },
                    onCancel: () => console.log('Cancel'),
                    onConfirm: () => dispatch(deleteCategoryApi(category._id, token)),
                  });
                  openModal()

                }}
                onHandleSub={() => handleManageSub(category)}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Paper>
      {/* </Card> */}
    </Paper>
  );
};

export default Category;
