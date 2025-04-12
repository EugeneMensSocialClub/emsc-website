import { Flex, Box } from "@mantine/core";
import HomeCarousel from "../componenets/homepage/Carousel";
import HomeFeaturesSection from "../componenets/homepage/Feature";
import HomeHeroSection from "../componenets/homepage/Hero";
import Testimonials from "../componenets/homepage/Testimonials";
import "../assets/stylesheets/homepage.css";
import Navigation from "../componenets/Navigation";
import JoinDiscordSection from "../componenets/homepage/JoinDiscord";

export function HomeRoute() {
  return (
    <Flex direction={"column"}>
      <Box>
        <Navigation />
        <HomeHeroSection />
        <Flex direction={"column"}>
          <HomeFeaturesSection />
        </Flex>
        <HomeCarousel />
        <Testimonials />
        <JoinDiscordSection />
      </Box>
    </Flex>
  );
}
