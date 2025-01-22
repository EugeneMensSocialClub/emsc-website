import React from "react";
import { Group, Anchor, Box } from "@mantine/core";

const AppFooter: React.FC = () => {
  return (
    <Box h={60} p="md" style={{ backgroundColor: "#333", color: "white" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div></div>
        <Group gap="xs">
          <Anchor href="https://discord.gg/BdghJWUH" target="_blank">
            Discord Server
          </Anchor>
          <Anchor href="https://twitter.com" target="_blank"></Anchor>
          <Anchor href="https://instagram.com" target="_blank"></Anchor>
        </Group>
      </Box>
    </Box>
  );
};

export default AppFooter;
