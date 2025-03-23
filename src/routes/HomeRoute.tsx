import { Flex } from "@mantine/core";
import HomeTestimonial from "../componenets/homepage/Carousel";
import MobileHomeTestimonial from "../componenets/homepage/mobile/MobileTestimonial";
import HomeFeaturesSection from "../componenets/homepage/Feature";
import MobileFeaturesSection from "../componenets/homepage/mobile/MobileFeaturesSection";
import HomeHeroSection from "../componenets/homepage/Hero";
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
      <Flex direction={"column"}>
        {isMobile ? <MobileFeaturesSection /> : <HomeFeaturesSection />}
      </Flex>
      {isMobile ? <MobileHomeTestimonial /> : <HomeTestimonial />}
    </Flex>
  );
}
