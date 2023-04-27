import { Button, Card, Flex, List, Modal, Text, TextInput, ThemeIcon, } from "@mantine/core";
import { IconAd, IconCircleCheck, IconCircleDashed, IconPlus, IconTrashFilled } from '@tabler/icons-react'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewSubCatgory, deleteSubCategory } from "../redux/actions/category.actions";

const SubCategoryModal = ({ isOpen, handleClose }) => {
    const disptach = useDispatch();
    const { selectedCategory } = useSelector(({ category }) => category);
    const { token } = useSelector(({ auth }) => auth)
    const [subCategName, setSubCategName] = useState("")
    const handleCreateConfirm = () => {
        disptach(createNewSubCatgory({ name: subCategName, parentCategory: selectedCategory._id }, token));
        setSubCategName("")
    }
    return (
        <Modal onClose={handleClose} opened={isOpen}>
            <Flex direction={"column"} gap={15}>
                <Flex justify={"space-between"} align={"center"}>
                    <Text size={"lg"}>Categorie:</Text> {selectedCategory && <Text weight={"bold"} size={"lg"}>{selectedCategory.name}</Text>}
                </Flex>
                <Flex justify={"space-between"} align={"center"} gap={10}>
                    <TextInput w={"100%"} label="Sous Categorie" value={subCategName} onChange={(e) => setSubCategName(e.target.value)} placeholder="Ajouter sous categorie" size="md" />
                    <Button mt={25} onClick={handleCreateConfirm}><IconPlus /></Button>
                </Flex>
                <List
                    spacing="xs"
                    size="sm"
                    center

                >

                    {
                        selectedCategory && selectedCategory.subCategories.map((elm) => <List.Item
                            icon={
                                <ThemeIcon color="red" size={24} radius="xl" style={{ cursor: "pointer" }} onClick={() => {
                                    disptach(deleteSubCategory(elm._id, elm.parentCategory, token))
                                }}>
                                    <IconTrashFilled size="1rem" />
                                </ThemeIcon>
                            }
                        >
                            {elm.name}
                        </List.Item>)
                    }
                </List>
            </Flex>
        </Modal>
    );
};

export default SubCategoryModal;
