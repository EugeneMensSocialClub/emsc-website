import { Center, Flex, Box } from "@mantine/core";
import HomeTestimonial from "../componenets/homepage/HomeTestimonial";
import MobileHomeTestimonial from "../componenets/homepage/mobile/MobileTestimonial";
import HomeFeaturesSection from "../componenets/homepage/HomeFeaturesSection";
import MobileFeaturesSection from "../componenets/homepage/mobile/MobileFeaturesSection";
import HomeHeroSection from "../componenets/homepage/HomeHeroSection";
import MobileHeroSection from "../componenets/homepage/mobile/MobileHeroSection";
import "../assets/stylesheets/homepage.css";
import useIsMobile from "../hooks/useIsMobile";
import Navigation from "../componenets/Navigation";

export function HomeRoute() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={"column"}>
      <Navigation />
      {isMobile ? <MobileHeroSection /> : <HomeHeroSection />}
      <Center id="test-center" w={"100%"}>
        <Box maw={1920} miw={320}>
          <Flex direction={"column"}>
            {isMobile ? <MobileFeaturesSection /> : <HomeFeaturesSection />}
          </Flex>
          {isMobile ? <MobileHomeTestimonial /> : <HomeTestimonial />}
        </Box>
      </Center>
    </Flex>
  );
}
