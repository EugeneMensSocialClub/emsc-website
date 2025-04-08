import homeLogo from "../../assets/images/HeroSectionLogo.svg";
import { Box, Image, Center, Title, Text } from "@mantine/core";

export default function HomeHeroSection() {
  return (
    <Box className="heroTitleContainer">
      <Box className="heroBackgound" />

      <Center className="heroContent" mih={"50vh"} /* needs breakpoints */>
        {" "}
        <Image src={homeLogo} w={254} />
        <Box className="titleContainer">
          <Box>
            <Title className="titleText" order={1}>
              A SPACE
            </Title>
            <Title className="titleText" order={1}>
              TO CONNECT
            </Title>
            <Text className="textBody">
              In an age often defined by digital isolation, the Eugene Men’s
              Social Club (EMSC) provides a refreshing alternative—a welcoming
              space where members can build genuine relationships, share
              experiences, and foster a true sense of belonging within their
              community.
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
