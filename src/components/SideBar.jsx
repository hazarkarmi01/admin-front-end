import {
  Center,
  createStyles,
  Navbar,
  rem,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
  IconUsers,
  IconArticle,
} from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconUsers, label: "Utilisateurs", linkTo: "/admin/users" },
  { icon: IconGauge, label: "Categories", linkTo: "/admin/categories" },
  { icon: IconArticle, label: "Annonces", linkTo: "/admin" },
];

const AdminSideBar = () => {
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        navigate(link.linkTo);
      }}
    />
  ));

  return (
    <Navbar
      height={750}
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background,
      })}
    >
      <Center>{/* <MantineLogo type="mark" inverted size={30} /> */}</Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default AdminSideBar;
