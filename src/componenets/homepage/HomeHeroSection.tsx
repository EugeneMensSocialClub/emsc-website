import pattern from "../../assets/images/EMSC_pattern.svg";
import { Box, BackgroundImage, Center, Title } from "@mantine/core";
import { theme } from "../../config/mantineTheme";

export default function HomeHeroSection() {
  return (
    <Box
      className="heroTitleContainer"
      style={{ backgroundColor: theme.colors.green[1] }}
    >
      <BackgroundImage style={{ padding: 0 }} src={pattern}>
        <Center mih={"75vh"}>
          <Title className="titleText" order={1}>
            Eugene Men's Social Club
          </Title>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
