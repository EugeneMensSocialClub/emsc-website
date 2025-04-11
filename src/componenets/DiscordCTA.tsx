import { Button, Box } from "@mantine/core";
import { theme } from "../config/mantineTheme";
import useIsMobile from "../hooks/useIsMobile";
import "../assets/stylesheets/_discordCTA.css";

export default function JoinDiscordCTA() {
  const isMobile = useIsMobile();
  return (
    <Box className="discordButtonWrapper">
      <Button
        component="a"
        href="https://discord.gg/YN2HPAsQcP"
        target="_blank"
        color={theme.colors.green[0]}
        radius={0}
        size={isMobile ? "xs" : "sm"}
        w={112}
        h={33}
        p={0}
      >
        Join Our Discord
      </Button>
    </Box>
  );
}
