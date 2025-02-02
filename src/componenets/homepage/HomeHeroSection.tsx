import logo from "../../assets/images/emsc-logo.png";
import { Box, BackgroundImage, Center, Title } from "@mantine/core";

export default function HomeHeroSection() {
  return (
    <Box className="heroTitleContainer">
      <BackgroundImage style={{ padding: 0 }} src={logo}>
        <Center mih={"75vh"}>
          <Title className="titleText" order={1}>
            Eugene Men's Social Club
          </Title>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
