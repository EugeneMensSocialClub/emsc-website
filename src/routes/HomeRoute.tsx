import { Center, Flex, Box } from "@mantine/core";
import HomeTestimonial from "../componenets/homepage/HomeTestimonial";
import MobileHomeTestimonial from "../componenets/homepage/mobile/MobileHomeTestimonial";
import HomeFeaturesSection from "../componenets/homepage/HomeFeaturesSection";
import MobileFeaturesSection from "../componenets/homepage/mobile/MobileFeaturesSection";
import HomeHeroSection from "../componenets/homepage/HomeHeroSection";
import MobileHeroSection from "../componenets/homepage/mobile/MobileHeroSection";
import "../assets/stylesheets/homepage.css";
import useIsMobile from "../hooks/useIsMobile";
import MobileWelcome from "../componenets/homepage/mobile/MobileWelcome";
import Welcome from "../componenets/homepage/Welcome";

export function HomeRoute() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={"column"}>
      {isMobile ? <MobileHeroSection /> : <HomeHeroSection />}
      <Center id="test-center" w={"100%"}>
        <Box maw={1920} miw={320}>
          <Center>
            <Flex direction={"column"}>
              {isMobile ? <MobileWelcome /> : <Welcome />}
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
