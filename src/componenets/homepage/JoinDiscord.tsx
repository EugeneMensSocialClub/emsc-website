import { Box, Button, Image, Text, Title, Center } from "@mantine/core";
import discordImage from "../../assets/images/discord_preview.png";
import "../../assets/stylesheets/homepage.css";

export default function JoinDiscordSection() {
  return (
    <Box className="discordSection">
      <Box className="discordBackground" />
      <Center>
        <Box className="discordContent">
          <Title order={2} className="discordTitle">
            START CREATING YOUR OWN CONNECTIONS
          </Title>
          <Text className="discordText">
            All of our hobbies, interests, and discussions are housed under one
            roof. If you’ve never used Discord, don’t sweat it! Come on in and
            we’ll help you acclimate and find your people.
          </Text>
          <Button
            className="discordButton"
            component="a"
            href="https://discord.gg/your-invite"
            target="_blank"
            maw={165}
          >
            Join Our Discord
          </Button>
        </Box>
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
      </Center>
    </Box>
  );
}
