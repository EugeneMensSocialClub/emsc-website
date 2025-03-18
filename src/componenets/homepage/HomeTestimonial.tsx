import { Carousel } from "@mantine/carousel";
import { Flex, Center, Text, Image, Box, Title } from "@mantine/core";
import layoverImage from "../../assets/images/Layover.png";
import craftParty from "../../assets/images/CraftParty.png";
import smallGroup from "../../assets/images/SmallGroup.png";
import "../../assets/stylesheets/homepage.css";

export default function HomeTestimonial() {
  return (
    <Flex className="carouselContainer" direction="column">
      <Center>
        <Carousel
          slideSize={"75%"}
          withIndicators
          withControls={false}
          slideGap={"xl"}
          controlsOffset={"xl"}
          maw={1280}
          loop
        >
          <Carousel.Slide>
            <Flex className="carouselSlideContent">
              <Image
                className="carouselImage"
                src={layoverImage}
                h={"100%"}
                w={"50%"}
              />
              <Box className="carouselTextContainer">
                <Title className="carouselTitle" order={2}>
                  TRIVIA NIGHTS
                </Title>
                <Text className="carouselText">
                  "If it weren’t for the Eugene men’s social club, I would’ve
                  been alone waiting for my connecting flight back."
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex>
              <Image
                className="carouselImage"
                src={craftParty}
                h={"100%"}
                w={"50%"}
              />
              <Box className="carouselTextContainer">
                <Title className="carouselTitle" order={2}>
                  LEGOS ARE FOR ADULTS
                </Title>
                <Text className="carouselText">
                  "With EMSC, I've been able to relive my childhood by playing
                  with Legos with my friends."
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex>
              <Image
                className="carouselImage"
                src={smallGroup}
                h={"100%"}
                w={"50%"}
              />
              <Box className="carouselTextContainer" id="textContainer">
                <Title className="carouselTitle" order={2}>
                  SUNDAY MEETUPS
                </Title>
                <Text className="carouselText">
                  "After living in Eugene for almost two years, this group gave
                  me a powerful method of making wonderful freinds in a city
                  where it had proven hard to meet people."
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Center>
    </Flex>
  );
}
