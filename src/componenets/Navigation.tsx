import { Box, Group, Image } from "@mantine/core";
import { theme } from "../config/mantineTheme";
import transparentLogo from "../assets/images/EMSC_logo_main.svg";
import JoinDiscordCTA from "./DiscordCTA";
import "../assets/stylesheets/header.css";

export default function Navigation() {
  return (
    <Box className="headerContainer" bg={theme.colors.green[0]} pb={20}>
      <Image src={transparentLogo} h={40} w={100} m={5} />
      <Group className="navGroup">
        <JoinDiscordCTA />
      </Group>
    </Box>
  );
}
