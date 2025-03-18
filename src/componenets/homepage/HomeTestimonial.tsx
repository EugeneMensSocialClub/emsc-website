import { Carousel } from "@mantine/carousel";
import { Flex, Center, Title, Text, Paper, Overlay } from "@mantine/core";
import layoverImage from "../../assets/images/Layover.png";
import craftParty from "../../assets/images/CraftParty.png";
import smallGroup from "../../assets/images/SmallGroup.png";
import "../../assets/stylesheets/homepage.css";

export default function HomeTestimonial() {
  return (
    <Flex className="testimonialContainer" direction="column">
      <Center className="tesmonialTitleContainer">
        <Title size="h1" order={2}>
          {" "}
          Stories from our Members
        </Title>
      </Center>
      <Center>
        <Carousel
          slideSize={{ base: "50%", sm: "75%" }}
          slideGap={"xl"}
          controlsOffset={"xl"}
          maw={1280}
          loop
        >
          <Carousel.Slide>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              h={500}
              style={{ backgroundImage: `url(${layoverImage})` }}
              aria-describedby="Two friends meet at the airport in serendipity."
              className="card"
              id="card"
            >
              <div></div>
              <div className="quoteContainer">
                <Text className="quote" ta="center">
                  "If it weren’t for the Eugene men’s social club, I would’ve
                  been alone waiting for my connecting flight back."
                </Text>
                <Text>
                  <b>PETER M.</b>
                </Text>
              </div>

              <Overlay
                gradient="linear-gradient(360deg, rgba(0, 0, 0, .95) 25%, rgba(0, 0, 0, 0) 50%)"
                opacity={0.85}
                zIndex={0}
              />
            </Paper>
          </Carousel.Slide>
          <Carousel.Slide>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              h={500}
              style={{ backgroundImage: `url(${craftParty})` }}
              className="card"
              aria-describedby="a large group of friends building legos."
              id="card"
            >
              <div></div>
              <div className="quoteContainer">
                <Text className="quote" ta="center">
                  "With EMSC, I've been able to relive my childhood by playing
                  with Legos with my friends."
                </Text>
                <Text>
                  <b>TOM B.</b>
                </Text>
              </div>
              <Overlay
                gradient="linear-gradient(360deg, rgba(0, 0, 0, .95) 25%, rgba(0, 0, 0, 0) 50%)"
                opacity={0.85}
                zIndex={0}
              />
            </Paper>
          </Carousel.Slide>
          <Carousel.Slide>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              h={500}
              style={{ backgroundImage: `url(${smallGroup})` }}
              className="card"
              aria-describedby="a small group of friends enjoying a gathering."
              id="card"
            >
              <div></div>
              <div className="quoteContainer">
                <Text className="quote" ta="center">
                  "After living in Eugene for almost two years, this group gave
                  me a powerful method of making wonderful freinds in a city
                  where it had proven hard to meet people."
                </Text>
                <Text>
                  <b>JOSHUA G.</b>
                </Text>
              </div>
              <Overlay
                gradient="linear-gradient(360deg, rgba(0, 0, 0, .95) 25%, rgba(0, 0, 0, 0) 50%)"
                opacity={0.85}
                zIndex={0}
              />
            </Paper>
          </Carousel.Slide>
        </Carousel>
      </Center>
    </Flex>
  );
}
