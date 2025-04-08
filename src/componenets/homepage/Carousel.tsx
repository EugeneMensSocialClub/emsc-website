import { Carousel } from "@mantine/carousel";
import { Flex, Center, Text, Image, Box, Title } from "@mantine/core";
import craftParty from "../../assets/images/CraftParty.png";
import smallGroup from "../../assets/images/SmallGroup.png";
import largeGroup from "../../assets/images/whole-group-chambers.png";
import "../../assets/stylesheets/homepage.css";

export default function HomeCarousel() {
  return (
    <Flex className="carouselContainer" direction="column">
      <Center>
        <Carousel
          slideSize={"75%"}
          withIndicators
          withControls={false}
          slideGap={"xl"}
          controlsOffset={"xl"}
          loop
        >
          <Carousel.Slide>
            <Flex className="carouselSlideContent">
              <Image className="carouselImage" src={largeGroup} w={"50%"} />
              <Box className="carouselTextContainer">
                <Title className="carouselTitle" order={2}>
                  SUNDAY MEETUPS
                </Title>
                <Text className="carouselText">
                  Rain or shine, you'll always find us hosting an every other
                  Sunday event we lovingly call "Beers with Buds." It’s the
                  perfect chance to relax, unwind, and connect with fellow
                  members over great conversation and cold brews (or non-brews).
                  Many of us have come to look forward to the welcoming vibes
                  and friendly faces.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex>
              <Image className="carouselImage" src={craftParty} w={"50%"} />
              <Box className="carouselTextContainer">
                <Title className="carouselTitle" order={2}>
                  LEGOS ARE FOR ADULTS
                </Title>
                <Text className="carouselText">
                  Building isn’t just for kids! Our LEGO nights bring out the
                  creativity in all of us—whether you're engineering an epic
                  spaceship, crafting a detailed cityscape, or just snapping
                  bricks together over good conversation. There’s something
                  meditative about the process, and it’s even better when shared
                  with fellow builders.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex>
              <Image className="carouselImage" src={smallGroup} w={"50%"} />
              <Box className="carouselTextContainer" id="textContainer">
                <Title className="carouselTitle" order={2}>
                  TRIVIA NIGHTS
                </Title>
                <Text className="carouselText">
                  Put your knowledge to the test at our Trivia Nights, where
                  quick thinking and random facts reign supreme! Whether you’re
                  a history buff, pop culture aficionado, or just in it for the
                  laughs, there’s a spot for you on the leaderboard. It’s all in
                  good fun—because winning isn’t everything… but bragging rights
                  are pretty nice!
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Center>
    </Flex>
  );
}
