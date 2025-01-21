import { Carousel } from "@mantine/carousel";
import { Flex, Center, Title, Text } from "@mantine/core";
import "../../assets/stylesheets/homepage.css";

export default function HomeTestimonial() {
  return (
    <Flex className="testimonialContainer" direction="column">
      <Center className="tesmonialTitleContainer">
        <Title size="h1"> Stories from our Members</Title>
      </Center>
      <Center>
        <Carousel
          slideSize={{ base: "100%", sm: "75%" }}
          slideGap={"xl"}
          controlsOffset={"xl"}
          maw={1280}
          loop
        >
          <Carousel.Slide>
            <div></div>
            <div className="quoteContainer">
              <Text className="quote" ta="center">
                "If it weren’t for the Eugene men’s social club, I would’ve been
                alone waiting for my connecting flight back home."
              </Text>
              <Text>
                <b>PETER M.</b>
              </Text>
            </div>
            {/* <Image src={layoverImage} /> */}
          </Carousel.Slide>
          <Carousel.Slide>
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
            {/* <Image src={craftParty} /> */}
          </Carousel.Slide>
          <Carousel.Slide>
            <div></div>
            <div className="quoteContainer">
              <Text className="quote" ta="center">
                "After living in Eugene for almost two years, this group gave me
                a powerful method of making wonderful freinds in a city where it
                had proven hard to meet people."
              </Text>
              <Text>
                <b>JOSHUA G.</b>
              </Text>
            </div>
            {/* <Image src={smallGroup} /> */}
          </Carousel.Slide>
        </Carousel>
      </Center>
    </Flex>
  );
}
