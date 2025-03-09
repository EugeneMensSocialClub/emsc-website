import logo from "../../../assets/images/emsc-logo.png";
import { Box, Center, Title, BackgroundImage, Flex } from "@mantine/core";

export default function MobileHeroSection() {
  return (
    <Box className="heroTitleContainer">
      <BackgroundImage style={{ padding: 0 }} src={logo}>
        <Flex direction={"column"}>
          <Center mt={75}>
            <Title className="titleText" lh={0.9} order={1}>
              Eugene
            </Title>
          </Center>
          <Center>
            <Title className="titleText" lh={0.9} order={1}>
              Men's
            </Title>
          </Center>
          <Center>
            <Title className="titleText" lh={0.9} order={1}>
              Social
            </Title>
          </Center>
          <Center>
            <Title className="titleText" lh={0.9} order={1}>
              Club
            </Title>
          </Center>
        </Flex>
      </BackgroundImage>
    </Box>
  );
}
