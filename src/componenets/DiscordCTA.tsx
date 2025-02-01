import { Button, Title, Box } from "@mantine/core";
import { theme } from "../config/mantineTheme";

export default function JoinMensGroupCTA() {
  return (
    <Box
      size="lg"
      style={{
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Title size={"h3"} order={2} style={{ marginBottom: "1rem" }}>
        Join the Men's Social Club
      </Title>
      <Button
        component="a"
        href="https://discord.gg/YN2HPAsQcP"
        size="lg"
        target="_blank"
        color={theme.colors.green[6]}
      >
        Sign Up Now
      </Button>
    </Box>
  );
}
