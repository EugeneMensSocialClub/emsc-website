import { Center, Flex, Image, Title, Text, Anchor } from "@mantine/core";
import threePeople from "../../assets/images/three-people-chill-drinks.png";
import dropBear from "../../assets/images/drop-bear.png";

export default function HomeFeaturesSection() {
  return (
    <>
      <Flex direction={"column"}>
        <Center>
          <Flex
            className="featureSection"
            gap={"md"}
            id="test"
            maw={1920}
            direction={{ base: "column-reverse", sm: "row" }}
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
                into Eugene Men's Social Club (EMSC)—a vibrant, diverse, and
                inclusive community where countless members have discovered some
                of their closest friendships since moving to the Eugene area.
              </Text>
              <Text className="textBody">
                Today, EMSC proudly boasts a membership of over 800 men and
                continues to grow steadily. Our group brings together people
                from all walks of life, united by shared interests and a spirit
                of camaraderie. Whether you're into music, mycology, fashion,
                fitness, tabletop gaming, or travel, there’s something here for
                everyone.
              </Text>
            </Flex>
          </Flex>
        </Center>
        <Center>
          <Flex
            className="featureSection"
            gap={"md"}
            direction={{ base: "column", sm: "row" }}
          >
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
                Curious where we’re meeting next?{" "}
                <Anchor href="https://discord.gg/YN2HPAsQcP" target="_blank">
                  {" "}
                  Join our Discord{" "}
                </Anchor>
                for the latest updates, venue announcements, and to connect with
                other members ahead of time. Whether you’re a craft beer
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
      </Flex>
    </>
  );
}
