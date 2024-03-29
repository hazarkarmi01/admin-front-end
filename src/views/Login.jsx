import {
  Button,
  createStyles,
  Paper,
  PasswordInput,
  rem,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAuthApi } from "../redux/actions/auth.actions";
import logo from '../assets/logo.png'


const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(700),
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 500,
    backgroundImage:
      "url('./assets/wallpaper.png')",
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
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
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });


  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <form onSubmit={form.onSubmit((values) => {
          console.log("values", values)
          dispatch(handleAuthApi(values, navigate));
        })}>
          <img src={logo} style={{ width: 150, height: 150, margin: 10, justifySelf: 'center',marginLeft:120 }} />

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Email invalide'}
            radius="md"
          />

          <PasswordInput
            required
            label="Mot de passe"
            placeholder="Votre mot de passe"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Mot de passe doit etre au moins 6 charactères'}
            radius="md"
          />

          <Button
            fullWidth
            mt="xl"
            size="md"
            type="submit"

          >
            Se Connecter
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;