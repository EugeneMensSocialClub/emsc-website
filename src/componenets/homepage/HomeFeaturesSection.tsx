import { Center, Flex, Image, Title, Text, Box } from "@mantine/core";
import dropBear from "../../assets/images/drop-bear.png";

export default function HomeFeaturesSection() {
  return (
    <>
      <Flex direction={"column"}>
        <Center>
          <Flex
            className="featureSection"
            gap={"md"}
            direction={{ base: "column", sm: "row" }}
          >
            <Image
              className="imageRight"
              src={dropBear}
              radius={"md"}
              h={"50vh"}
              w={"75vw"}
            />
            <Flex className="textContainer" direction="column">
              <Box className="boxedTitle">
                <Title
                  size="h2"
                  style={{ margin: 0, padding: 0, lineHeight: 1 }}
                  order={2}
                  textWrap="nowrap"
                >
                  WELCOME TO EMSC
                </Title>
              </Box>
              <Text className="textBody">
                What began as a small gathering in October 2022 has blossomed
                into Eugene Men's Social Club (EMSC)—a vibrant, diverse, and
                inclusive community where countless members have discovered some
                of their closest friendships since moving to the Eugene area.
              </Text>
              <Text className="textBody">
                With over 800 members, and continuing to grow, our group brings
                together people from all walks of life, united by shared
                interests and a spirit of camaraderie. Whether you're into
                music, mycology, fashion, fitness, tabletop gaming, or travel,
                there’s something here for everyone.
              </Text>
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </>
  );
}
