import { Center, Flex, Image, Title, Text, Anchor } from "@mantine/core";
import threePeople from "../../../assets/images/three-people-chill-drinks.png";
import dropBear from "../../../assets/images/drop-bear.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function MobileFeaturesSection() {
  return (
    <>
      <Flex className="featuresContainer" direction={"column"}>
        <Center>
          <Flex
            className="featureSection"
            gap={"xl"}
            id="test"
            direction={{ base: "column" }}
          >
            <div>
              <Center>
                <Image
                  className="imageLeft"
                  src={threePeople}
                  radius={"md"}
                  h={"50vw"}
                  w={"100vw"}
                />
              </Center>
            </div>
            <Center>
              <Flex maw={682} direction="column">
                <Center>
                  <Title size={"h3"} order={2}>
                    Welcome to the Club
                  </Title>
                </Center>
                <Center>
                  <Text ta="center" className="textBody">
                    Eugene Men's Social Club (EMSC) is a vibrant community of
                    over 800 members fostering genuine friendships and
                    connections in the Eugene area.
                  </Text>
                </Center>
                <Center>
                  <Text ta="center" className="textBody">
                    From music to fitness, gaming to travel, we bring together
                    diverse interests while building lasting relationships and
                    mutual support. everyone.
                  </Text>
                </Center>
              </Flex>
            </Center>
          </Flex>
        </Center>
        <Center>
          <Flex
            className="featureSection"
            gap="xl"
            direction={{ base: "column" }}
          >
            <div>
              <Center>
                <Image
                  className="imageRight"
                  src={dropBear}
                  radius={"md"}
                  h={"50vw"}
                  w={"100vw"}
                />
              </Center>
            </div>
            <Center>
              <Flex maw={682} direction="column">
                <Center>
                  <Title ta="center" size="h3" order={2}>
                    We Meet Every Other Sunday
                  </Title>
                </Center>
                <Text ta="center" className="textBody">
                  Join us for "Beers with Buds" every other Sunday - a casual
                  gathering to connect over drinks and conversation.
                </Text>
                <Text ta="center" className="textBody">
                  Find our next meetup location and connect with members by
                  <Anchor
                    href="https://discord.gg/YN2HPAsQcP"
                    target="_blank"
                    aria-label={"Discord invite"}
                  >
                    {" "}
                    joining our Discord community.{" "}
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      aria-label={"new tab icon"}
                    />
                  </Anchor>
                </Text>
              </Flex>
            </Center>
          </Flex>
        </Center>
      </Flex>
    </>
  );
}
