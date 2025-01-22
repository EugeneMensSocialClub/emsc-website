import React from "react";
import { Button, Title, Box } from "@mantine/core";
import { theme } from "../config/mantineTheme";

const JoinMensGroupCTA: React.FC = () => {
  return (
    <Box
      size="lg"
      style={{
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Join the Men's Social Club
      </Title>
      <Button
        component="a"
        href="https://discord.gg/BdghJWUH"
        size="lg"
        color={theme.colors.green[6]}
      >
        Sign Up Now
      </Button>
    </Box>
  );
};

export default JoinMensGroupCTA;
