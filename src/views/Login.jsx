import {
  Button,
  createStyles,
  Paper,
  PasswordInput,
  rem,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Bienvenue
        </Title>

        <TextInput
          label="Adresse Email"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Mot de passe"
          placeholder="votre mot de passe"
          mt="md"
          size="md"
        />

        <Button
          fullWidth
          mt="xl"
          size="md"
          onClick={() => {
            navigate("/admin");
          }}
        >
          Se Connecter
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
