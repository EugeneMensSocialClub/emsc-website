import logo from "../../assets/images/emsc-logo.png";
import { Box, Center, Title, BackgroundImage, Flex } from "@mantine/core";

export default function MobileHeroSection() {
  return (
    <Box className="heroTitleContainer">
      <BackgroundImage style={{ padding: 0 }} src={logo}>
        <Flex direction={"column"}>
          <Center>
            <Title className="titleText">Eugene</Title>
          </Center>
          <Center>
            <Title className="titleText">Men's</Title>
          </Center>
          <Center>
            <Title className="titleText">Social</Title>
          </Center>
          <Center>
            <Title className="titleText">Club</Title>
          </Center>
        </Flex>
      </BackgroundImage>
    </Box>
  );
}
