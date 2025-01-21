import {
  Center,
  Flex,
  BackgroundImage,
  Box,
  Title,
  Text,
  Image,
} from "@mantine/core";
import HomeTestimonial from "../componenets/HomeTestimonial";
import MobileHomeTestimonial from "../componenets/mobile/MobileHomeTestimonial";
import logo from "../assets/images/emsc-logo.png";
import threePeople from "../assets/images/three-people-chill-drinks.png";
import dropBear from "../assets/images/drop-bear.png";
import "../assets/stylesheets/homepage.css";
import useIsMobile from "../hooks/useIsMobile";

export function HomeRoute() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={"column"}>
      <Box className="heroTitleContainer">
        <BackgroundImage style={{ padding: 0 }} src={logo}>
          <Center mih={"75vh"}>
            <Title className="titleText">Eugene Men's Social Club</Title>
          </Center>
        </BackgroundImage>
      </Box>
      <Center id="test-center" w={"100%"}>
        <Box maw={1920} miw={320}>
          <Center>
            <Box maw={1920}>
              <Flex className="upperWelcome" direction={"column"}>
                <Center>
                  <Title textWrap={"stable"} size={isMobile ? "h2" : "h1"}>
                    GROWING HEALTHY SOCIAL CONNECTIONS FOR MEN
                  </Title>
                </Center>
                <Text maw={1080}>
                  In an age often defined by digital isolation, EMSC provides a
                  refreshing alternative—a welcoming space where members can
                  build genuine relationships, share experiences, and foster a
                  true sense of belonging within their community.
                </Text>
              </Flex>
            </Box>
          </Center>
          <Center>
            <Flex
              className="featureSection"
              gap={"xl"}
              id="test"
              direction={{ base: "column-reverse", lg: "row" }}
            >
              <Image
                className="imageLeft"
                src={threePeople}
                radius={"md"}
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
          </Center>
          <Center>
            <Flex
              className="featureSection"
              gap="xl"
              direction={{ base: "column", lg: "row" }}
            >
              <Flex direction="column">
                <Title size="h2">We Meet Every Other Sunday</Title>
                <Text className="textBody">
                  Rain or shine, you'll always find us hosting an event we
                  lovingly call "Beers with Buds" every other Sunday. It’s the
                  perfect chance to relax, unwind, and connect with fellow
                  members over great conversation and cold brews (or non-brews).
                  While the venue might change from week to week, the welcoming
                  vibes and friendly faces remain the same.
                </Text>
                <Text className="textBody">
                  Curious where we’re meeting next? Join our Discord community
                  for the latest updates, venue announcements, and to connect
                  with other members ahead of time. Whether you’re a craft beer
                  enthusiast or just looking for good company, "Beers with Buds"
                  is the place to be. Cheers to making Sundays something to look
                  forward to!
                </Text>
              </Flex>
              <Image
                className="imageRight"
                src={dropBear}
                radius={"md"}
                h={"50vh"}
                w={"50vw"}
              />
            </Flex>
          </Center>
          {isMobile ? <MobileHomeTestimonial /> : <HomeTestimonial />}
        </Box>
      </Center>
    </Flex>
  );
}
