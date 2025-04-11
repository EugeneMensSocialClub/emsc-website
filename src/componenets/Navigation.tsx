import { Box, Group, Image } from "@mantine/core";
import { theme } from "../config/mantineTheme";
import transparentLogo from "../assets/images/EMSC_logo_main.svg";
import JoinDiscordCTA from "./DiscordCTA";
import "../assets/stylesheets/header.css";

export default function Navigation() {
  return (
    <Box className="headerContainer" bg={theme.colors.green[0]}>
      <Image className="navImage" src={transparentLogo} />
      <Group className="navGroup">
        <JoinDiscordCTA />
      </Group>
    </Box>
  );
}
