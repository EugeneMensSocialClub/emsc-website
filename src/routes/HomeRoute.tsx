import { Center, Flex, BackgroundImage, Box, Title } from "@mantine/core";
import logo from "../assets/images/emsc-logo.png";
import "../assets/stylesheets/components/homepageHero.css";

export function HomeRoute() {
  return (
    <>
      <BackgroundImage src={logo}>
        <Box mih={"50vh"}>
          <Center mih={"50vh"}>
            <Title size="h1" className="heroTitle">
              Eugene Men's Social Club
            </Title>
          </Center>
        </Box>
      </BackgroundImage>
    </>
  );
}
