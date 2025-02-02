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
          <Anchor
            href="https://discord.gg/YN2HPAsQcP"
            target="_blank"
            aria-label="Discord invite new tab"
            style={{ color: "var(--mantine-color-white)" }}
          >
            Discord Server
          </Anchor>
        </Group>
      </Box>
    </Box>
  );
};

export default AppFooter;
