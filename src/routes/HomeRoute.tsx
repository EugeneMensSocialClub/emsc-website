import {
  Center,
  Flex,
  BackgroundImage,
  Box,
  Title,
  Text,
  Image,
  Paper,
  Overlay,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import logo from "../assets/images/emsc-logo.png";
import layoverImage from "../assets/images/Layover.png";
import craftParty from "../assets/images/CraftParty.png";
import smallGroup from "../assets/images/SmallGroup.png";
import threePeople from "../assets/images/three-people-chill-drinks.png";
import dropBear from "../assets/images/drop-bear.png";
import "../assets/stylesheets/homepage.css";

export function HomeRoute() {
  return (
    <>
      <BackgroundImage src={logo}>
        <Box mih={"75vh"} className="heroTitleContainer">
          <Center mih={"75vh"}>
            <Title className="titleText">Eugene Men's Social Club</Title>
          </Center>
        </Box>
      </BackgroundImage>
      <Flex direction={"column"}>
        <Center>
          <Box maw={1920}>
            <Flex className="upperWelcome" direction={"column"}>
              <Center>
                <Title size="h1">
                  GROWING HEALTHY SOCIAL CONNECTIONS FOR MEN
                </Title>
              </Center>
              <Text maw={1080}>
                In an age often defined by digital isolation, EMSC provides a
                refreshing alternative—a welcoming space where members can build
                genuine relationships, share experiences, and foster a true
                sense of belonging within their community.
              </Text>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Box maw={1920}>
            <Flex className="featureSection" gap={"xl"} id="test">
              <Image
                className="imageLeft"
                src={threePeople}
                h={"50vh"}
                w={"50vw"}
              />
              <Flex direction="column">
                <Title size="h2">Welcome to the Club</Title>
                <Text className="textBody">
                  What began as a small gathering in October 2022 has blossomed
                  into Eugene Men's Social Club (EMSC)—a vibrant, diverse and
                  inclusive community where countless members have discovered
                  some of their closest friendships since moving to the Eugene
                  area.
                </Text>
                <Text className="textBody">
                  Today, EMSC proudly boasts a membership of over 800 men and
                  continues to grow steadily. Our group brings together people
                  from all walks of life, united by shared interests and a
                  spirit of camaraderie. Whether you're into music, mycology,
                  fashion, fitness, tabletop gaming, or travel, there’s
                  something here for everyone.
                </Text>
                <Text className="textBody">
                  But what truly sets EMSC apart isn’t just the activities we
                  enjoy—it’s the quality of our members. This is a group built
                  on support, connection, and genuine friendship. In an
                  increasingly online world, we’re creating something real: a
                  community where men lift each other up, discover common
                  ground, and build relationships that last a lifetime.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Flex className="featureSection" gap="xl">
            <Flex direction="column">
              <Title size="h2">We Meet Every Other Sunday</Title>
              <Text className="textBody">
                Rain or shine, you'll always find us hosting an event we
                lovingly call "Beers with Buds" every other Sunday. It’s the
                perfect chance to relax, unwind, and connect with fellow members
                over great conversation and cold brews (or non-brews). While the
                venue might change from week to week, the welcoming vibes and
                friendly faces remain the same.
              </Text>
              <Text className="textBody">
                Curious where we’re meeting next? Join our Discord community for
                the latest updates, venue announcements, and to connect with
                other members ahead of time. Whether you’re a craft beer
                enthusiast or just looking for good company, "Beers with Buds"
                is the place to be. Cheers to making Sundays something to look
                forward to!
              </Text>
            </Flex>
            <Image
              className="imageRight"
              src={dropBear}
              h={"50vh"}
              w={"50vw"}
            />
          </Flex>
        </Center>
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
                <Paper
                  shadow="md"
                  p="xl"
                  radius="md"
                  h={500}
                  style={{ backgroundImage: `url(${layoverImage})` }}
                  className="card"
                  id="card"
                >
                  <div></div>
                  <div className="quoteContainer">
                    <Text className="quote" ta="center">
                      "If it weren’t for the Eugene men’s social club, I
                      would’ve been alone waiting for my connecting flight."
                    </Text>
                    <Text>
                      <b>PETER M.</b>
                    </Text>
                  </div>

                  <Overlay
                    gradient="linear-gradient(360deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 50%)"
                    opacity={0.85}
                    zIndex={0}
                  />
                </Paper>
                {/* <Image src={layoverImage} /> */}
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper
                  shadow="md"
                  p="xl"
                  radius="md"
                  h={500}
                  style={{ backgroundImage: `url(${craftParty})` }}
                  className="card"
                  id="card"
                >
                  <div></div>
                  <div className="quoteContainer">
                    <Text className="quote" ta="center">
                      "With EMSC, I've been able to relive my childhood by
                      playing with Legos with my friends."
                    </Text>
                    <Text>
                      <b>TOM B.</b>
                    </Text>
                  </div>
                  <Overlay
                    gradient="linear-gradient(360deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 50%)"
                    opacity={0.85}
                    zIndex={0}
                  />
                </Paper>
                {/* <Image src={craftParty} /> */}
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper
                  shadow="md"
                  p="xl"
                  radius="md"
                  h={500}
                  style={{ backgroundImage: `url(${smallGroup})` }}
                  className="card"
                  id="card"
                >
                  <div></div>
                  <div className="quoteContainer">
                    <Text className="quote" ta="center">
                      "After living in Eugene for almost two years, this group
                      gave me a powerful method of making wonderful freinds in a
                      city where it had proven hard to meet people."
                    </Text>
                    <Text>
                      <b>JOSHUA G.</b>
                    </Text>
                  </div>
                  <Overlay
                    gradient="linear-gradient(360deg, rgba(0, 0, 0, .95) 0%, rgba(0, 0, 0, 0) 50%)"
                    opacity={0.85}
                    zIndex={0}
                  />
                </Paper>
                {/* <Image src={smallGroup} /> */}
              </Carousel.Slide>
            </Carousel>
          </Center>

          {/* <BackgroundImage
              radius={"md"}
              h={"40vh"}
              w={"30vw"}
              src={layoverImage}
            >
              {" "}
            </BackgroundImage> */}
          {/* <Image radius={"md"} h={"40vh"} w={"30vw"} src={layoverImage} />
            <Box>
              <Text></Text>
            </Box> */}
          {/* <BackgroundImage
              radius={"lg"}
              h={"40vh"}
              w={"30vw"}
              src={craftParty}
            >
              {" "}
            </BackgroundImage> */}

          {/* <Image radius={"md"} h={"40vh"} w={"30vw"} src={craftParty} />
            <Box></Box> */}
          {/* <BackgroundImage
              radius={"lg"}
              h={"40vh"}
              w={"30vw"}
              src={smallGroup}
            >
              {" "}
            </BackgroundImage> */}

          {/* <Image radius={"md"} h={"40vh"} w={"30vw"} src={smallGroup} />
            <Box></Box> */}
        </Flex>
      </Flex>
    </>
  );
}
