import { Carousel } from "@mantine/carousel";
import { Flex, Center, Title, Text, Image } from "@mantine/core";
import tom from "../../../assets/images/Tom_B.png";
import joshua from "../../../assets/images/Joshua_G.png";
import peter from "../../../assets/images/Peter_M.png";
import "../../../assets/stylesheets/homepage.css";

export default function HomeTestimonial() {
  return (
    <Flex className="testimonialContainer" direction="column">
      <Center className="tesmonialTitleContainer">
        <Title size="h3" order={2}>
          {" "}
          Stories from our Members
        </Title>
      </Center>
      <Center>
        <Carousel
          slideSize={"100%"}
          slideGap={"xl"}
          controlsOffset={"xl"}
          withControls={false}
          withIndicators
          maw={680}
          loop
        >
          <Carousel.Slide>
            <Center>
              <div></div>
              <div className="quoteContainer">
                <Center>
                  <Image w={40} h={40} src={peter} />
                </Center>
                <Text className="quote" ta="center">
                  "If it weren’t for the Eugene men’s social club, I would’ve
                  been alone waiting for my connecting flight back home."
                </Text>
                <Center>
                  <Text>
                    <b>PETER M.</b>
                  </Text>
                </Center>
              </div>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide>
            <Center>
              <div></div>
              <div className="quoteContainer">
                <Center>
                  <Image w={40} h={40} src={tom} />
                </Center>
                <Text className="quote" ta="center" maw={300}>
                  "With EMSC, I've been able to relive my childhood by playing
                  with Legos with my friends."
                </Text>
                <Center>
                  <Text>
                    <b>TOM B.</b>
                  </Text>
                </Center>
              </div>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide>
            <Center>
              <div></div>
              <div className="quoteContainer">
                <Center>
                  <Image w={40} h={40} src={joshua} />
                </Center>
                <Text className="quote" ta="center">
                  "This group gave me a powerful method of making wonderful
                  friends in a city where it had proven hard to meet people."
                </Text>
                <Center>
                  <Text>
                    <b>JOSHUA G.</b>
                  </Text>
                </Center>
              </div>
            </Center>
          </Carousel.Slide>
        </Carousel>
      </Center>
    </Flex>
  );
}
