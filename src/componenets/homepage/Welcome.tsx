import { Flex, Box, Center, Title, Text } from "@mantine/core";
import JoinMensGroupCTA from "../DiscordCTA";
import useIsMobile from "../../hooks/useIsMobile";

export default function Welcome() {
  const isMobile = useIsMobile();

  return (
    <Box id="testing" maw={1920}>
      <Center>
        <Flex className="upperWelcome" direction={"column"} maw={1080}>
          <Center>
            <Title textWrap={"stable"} size={isMobile ? "h3" : "h1"}>
              GROWING HEALTHY SOCIAL CONNECTIONS FOR MEN
            </Title>
          </Center>
          <Center>
            <Box maw={400}>
              <Text>
                In an age often defined by digital isolation, EMSC provides a
                refreshing alternative—a welcoming space where members can build
                genuine relationships, share experiences, and foster a true
                sense of belonging within their community.
              </Text>
            </Box>
            <JoinMensGroupCTA />
          </Center>
        </Flex>
      </Center>
    </Box>
  );
}
