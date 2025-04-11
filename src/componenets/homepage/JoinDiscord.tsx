import { Box, Image, Text, Title, Flex } from "@mantine/core";
import useIsMobile from "../../hooks/useIsMobile";
import JoinDiscordCTA from "../DiscordCTA";
import discordImage from "../../assets/images/discord_preview.png";
import "../../assets/stylesheets/homepage.css";

export default function JoinDiscordSection() {
  const isMobile = useIsMobile();
  return (
    <Box className="discordSection">
      <Box className="discordBackground" />
      <Flex className="discordContentWrapper">
        <Box className="discordContent">
          <Box className="discordTitleWrapper">
            <Title
              order={2}
              className="discordTitle"
              size={isMobile ? "h3" : "h2"}
            >
              START CREATING
            </Title>
            <Title
              order={2}
              className="discordTitle"
              size={isMobile ? "h3" : "h2"}
            >
              YOUR OWN CONNECTIONS
            </Title>
          </Box>

          <Text className="discordText">
            All of our hobbies, interests, and discussions are housed under one
            roof. If you’ve never used Discord, don’t sweat it! Come on in and
            we’ll help you acclimate and find your people.
          </Text>
          <Flex justify={isMobile ? "center" : "flex-start"}>
            <Box className="buttonBorder">
              <JoinDiscordCTA />
            </Box>
          </Flex>
        </Box>
        {!isMobile && (
          <Box className="discordImageWrapper">
            <Image
              src={discordImage}
              alt="Discord preview"
              className="discordImage"
              mah={{
                base: "40vh",
                sm: "50vh",
                lg: "35vh",
              }} /* Limits max height */
              maw={{
                base: "80vw",
                sm: "50vw",
                lg: "40vw",
                xl: "30vw",
              }} /* Controls width */
              fit="cover"
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
