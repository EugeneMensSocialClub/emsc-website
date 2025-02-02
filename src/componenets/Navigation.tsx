import { Box, Button, Group, Image } from "@mantine/core";
import { theme } from "../config/mantineTheme";
import transparentLogo from "../assets/images/EMSC_logo_main.svg";
import "../assets/stylesheets/header.css";

export default function Navigation() {
  return (
    <Box className="headerContainer" bg={theme.black} pb={20}>
      <Image src={transparentLogo} h={40} w={100} m={5} />
      <Group>
        <Button
          component="a"
          href="https://discord.gg/YN2HPAsQcP"
          size="sm"
          target="_blank"
          aria-label={"Discord invite new tab"}
          color={theme.colors.green[6]}
          m={5}
        >
          Sign Up Now
        </Button>
      </Group>
    </Box>
  );
}
