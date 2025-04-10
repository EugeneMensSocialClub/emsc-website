import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Flex, Center, Text, Image, Box, Title } from "@mantine/core";
import useIsMobile from "../../hooks/useIsMobile";
import craftParty from "../../assets/images/CraftParty.png";
import smallGroup from "../../assets/images/SmallGroup.png";
import largeGroup from "../../assets/images/whole-group-chambers.png";
import "../../assets/stylesheets/homepage.css";

export default function HomeCarousel() {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "SUNDAY MEETUPS",
      text: `Rain or shine, you'll always find us hosting an every other
                  Sunday event we lovingly call "Beers with Buds." It’s the
                  perfect chance to relax, unwind, and connect with fellow
                  members over great conversation and cold brews (or non-brews).
                  Many of us have come to look forward to the welcoming vibes
                  and friendly faces.`,
      image: largeGroup,
    },
    {
      title: "LEGOS FOR ADULTS",
      text: `Building isn’t just for kids! Our LEGO nights bring out the
                  creativity in all of us—whether you're engineering an epic
                  spaceship, crafting a detailed cityscape, or just snapping
                  bricks together over good conversation. There’s something
                  meditative about the process, and it’s even better when shared
                  with fellow builders.`,
      image: craftParty,
    },
    {
      title: "TRIVIA NIGHTS",
      text: `Put your knowledge to the test at our Trivia Nights, where
                  quick thinking and random facts reign supreme! Whether you’re
                  a history buff, pop culture aficionado, or just in it for the
                  laughs, there’s a spot for you on the leaderboard. It’s all in
                  good fun—because winning isn’t everything… but bragging rights
                  are pretty nice!`,
      image: smallGroup,
    },
  ];
  return (
    <Flex className="carouselContainer" direction="column">
      <Center>
        <Carousel
          slidesToScroll={isMobile ? 1 : "auto"}
          slideSize={isMobile ? "100vw" : "75%"}
          withControls={false}
          slideGap={"xl"}
          controlsOffset={"xl"}
          loop
          onSlideChange={(progress) => {
            const index = Math.round(progress);
            setActiveSlide(index);
          }}
        >
          {slides.map((slide, index) => (
            <Carousel.Slide key={index}>
              <Flex
                className="carouselSlideContent"
                direction={isMobile ? "column" : "row"}
              >
                <Image
                  className="carouselImage"
                  src={slide.image}
                  w={isMobile ? "100%" : "50%"}
                />
                <Box className="carouselTextContainer">
                  <Title
                    className="carouselTitle"
                    order={2}
                    size={isMobile ? "h3" : "h2"}
                  >
                    {slide.title}
                  </Title>
                  <Text className="carouselText">{slide.text}</Text>
                  <Box className="inicatorsContainer">
                    <Flex justify={isMobile ? "center" : "flex-end"} gap="xs">
                      {slides.map((_, index) => (
                        <Box
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          className={`dot ${
                            index === activeSlide ? "active" : ""
                          }`}
                        />
                      ))}
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Center>
    </Flex>
  );
}
