import { Flex } from "@mantine/core";
import HomeCarousel from "../componenets/homepage/Carousel";
import MobileHomeTestimonial from "../componenets/homepage/mobile/MobileTestimonial";
import HomeFeaturesSection from "../componenets/homepage/Feature";
import HomeHeroSection from "../componenets/homepage/Hero";
import Testimonials from "../componenets/homepage/Testimonials";
import "../assets/stylesheets/homepage.css";
import useIsMobile from "../hooks/useIsMobile";
import Navigation from "../componenets/Navigation";
import JoinDiscordSection from "../componenets/homepage/JoinDiscord";

export function HomeRoute() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={"column"}>
      <Navigation />
      {isMobile ? <HomeHeroSection /> : <HomeHeroSection />}
      <Flex direction={"column"}>
        {isMobile ? <HomeFeaturesSection /> : <HomeFeaturesSection />}
      </Flex>
      {isMobile ? <HomeCarousel /> : <HomeCarousel />}
      {!isMobile && (
        <>
          <Testimonials />
          <JoinDiscordSection />
        </>
      )}
    </Flex>
  );
}
