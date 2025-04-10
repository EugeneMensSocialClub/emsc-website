import homeLogo from "../../assets/images/HeroSectionLogo.svg";
import { Box, Image, Center, Title, Text } from "@mantine/core";
import useIsMobile from "../../hooks/useIsMobile";

export default function HomeHeroSection() {
  const isMobile = useIsMobile();
  return (
    <Box className="heroTitleContainer">
      <Box className="heroBackgound" />
      <Center className="heroContent" mih={"50vh"}>
        {" "}
        <Image className="heroLogo" src={homeLogo} />
        <Box className="titleContainer">
          <Box className="headings">
            <Title className="titleText" order={1}>
              A SPACE
            </Title>
            <Title className="titleText" order={1}>
              TO CONNECT
            </Title>
          </Box>
          <Text className="textBody">
            {isMobile
              ? `The Eugene Men’s Social Club (EMSC) is all about making connections. It’s a place where we can meet up, share stories, and build real connections with friends. We offer a laid-back space to hang out, share experiences, and be part of something real.`
              : `In an age often defined by digital isolation, the Eugene Men’s Social Club (EMSC) provides a refreshing alternative—a welcoming space where members can build genuine relationships, share experiences, and foster a true sense of belonging within their community.`}
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
