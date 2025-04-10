import { Button } from "@mantine/core";
import { theme } from "../config/mantineTheme";

export default function JoinDiscordCTA() {
  return (
    <Button
      component="a"
      href="https://discord.gg/YN2HPAsQcP"
      target="_blank"
      maw={165}
      color={theme.colors.green[0]}
      radius={0}
      border-color={theme.colors.white}
      border-size={1}
    >
      Join Our Discord
    </Button>
  );
}
