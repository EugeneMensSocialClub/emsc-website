import { Center, Flex, BackgroundImage, Box, Title, Text } from "@mantine/core";
import HomeTestimonial from "../componenets/HomeTestimonial";
import MobileHomeTestimonial from "../componenets/mobile/MobileHomeTestimonial";
import HomeFeaturesSection from "../componenets/HomeFeaturesSection";
import MobileFeaturesSection from "../componenets/mobile/MobileFeaturesSection";
import HomeHeroSection from "../componenets/HomeHeroSection";
import MobileHeroSection from "../componenets/mobile/MobileHeroSection";
import "../assets/stylesheets/homepage.css";
import useIsMobile from "../hooks/useIsMobile";

export function HomeRoute() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={"column"}>
      {isMobile ? <MobileHeroSection /> : <HomeHeroSection />}
      <Center id="test-center" w={"100%"}>
        <Box maw={1920} miw={320}>
          <Center>
            <Flex direction={"column"}>
              <Box maw={1920}>
                <Flex className="upperWelcome" direction={"column"}>
                  <Center>
                    <Title textWrap={"stable"} size={isMobile ? "h3" : "h1"}>
                      GROWING HEALTHY SOCIAL CONNECTIONS FOR MEN
                    </Title>
                  </Center>
                  <Text maw={1080}>
                    In an age often defined by digital isolation, EMSC provides
                    a refreshing alternative—a welcoming space where members can
                    build genuine relationships, share experiences, and foster a
                    true sense of belonging within their community.
                  </Text>
                </Flex>
              </Box>
              <Center>
                {isMobile ? <MobileFeaturesSection /> : <HomeFeaturesSection />}
              </Center>
            </Flex>
          </Center>
          {isMobile ? <MobileHomeTestimonial /> : <HomeTestimonial />}
        </Box>
      </Center>
    </Flex>
  );
}
