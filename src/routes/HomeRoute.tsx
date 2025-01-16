import {
  Center,
  Flex,
  BackgroundImage,
  Box,
  Title,
  Text,
  Image,
} from "@mantine/core";
import logo from "../assets/images/emsc-logo.png";
import placeholder from "../assets/images/placeholder.svg";
import "../assets/stylesheets/homepage.css";

export function HomeRoute() {
  return (
    <>
      <BackgroundImage src={logo}>
        <Box mih={"75vh"} className="heroTitle">
          <Center mih={"75vh"}>
            <Title size="h1">Eugene Men's Social Club</Title>
          </Center>
        </Box>
      </BackgroundImage>
      <Box className="upperWelcome">
        <Flex direction={"column"}>
          <Title size="h3">Growing healthy social connections for men</Title>
          <Text>
            With members in and around Eugene, Oregon, EMSC has helped nearly
            800 members find healthy and supportive social connections in an age
            of digital isolation.
          </Text>
        </Flex>
      </Box>
      <Flex className="imageAndText">
        <Image src={placeholder} h={200} w={200} />
        <Flex direction="column">
          <Title size="h3">Welcome to the group</Title>
          <Text>
            We have [list of interests] and take care for the people in our
            group.
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex direction="column">
          <Title size="h3">We do meet every other Sunday of the month</Title>
          <Text>Beers with Bufs text</Text>
        </Flex>
        <Image src={placeholder} h={200} w={200} />
      </Flex>
      <Flex direction="column">
        <Title size="h3"> Stories from our Members</Title>
        <Flex>
          <BackgroundImage></BackgroundImage>
          <BackgroundImage></BackgroundImage>
          <BackgroundImage></BackgroundImage>
        </Flex>
      </Flex>
    </>
  );
}
