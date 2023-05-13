import { Modal, TextInput, Checkbox, Group, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserApi, updateUserApi } from "../redux/actions/user.actions";

const EditUserModal = ({ handleClose, isOpen }) => {
    const { token } = useSelector(({ auth }) => auth);
    const { selectedUser } = useSelector(({ users }) => users);
    const [isAdmin, setIsAdmin] = useState(false)
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
    useEffect(() => {
        if (selectedUser) {
            console.log("Selected USer", selectedUser);
            if (selectedUser.role == "ADMIN") {
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        }
    }, [selectedUser])
    return (
        <Modal
            opened={isOpen}
            onClose={handleClose}
            title="Ajouter nouveau utilisateur"
            centered
        >

            <Checkbox label="Admin" mb={"sm"} checked={isAdmin} onChange={(e) => setIsAdmin(e.currentTarget.checked)} />
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
                        if (selectedUser) {
                            dispatch(updateUserApi(selectedUser._id, { role: isAdmin ? "ADMIN" : "USER" }, token));
                            handleClose();
                        }
                    }}
                >
                    Confirmer
                </Button>
            </Group>
        </Modal>
    );
};

export default EditUserModal;
