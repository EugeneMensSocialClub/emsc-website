import { Flex, Box, AppShell } from "@mantine/core";
import HomeCarousel from "../componenets/homepage/Carousel";
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
    <AppShell header={{ height: 50 }}>
      <AppShell.Header>
        <Navigation />
      </AppShell.Header>
      <AppShell.Main>
        {isMobile ? <HomeHeroSection /> : <HomeHeroSection />}
        <Flex direction={"column"}>
          {isMobile ? <HomeFeaturesSection /> : <HomeFeaturesSection />}
        </Flex>
        {isMobile ? <HomeCarousel /> : <HomeCarousel />}
        <Testimonials />
        <JoinDiscordSection />
      </AppShell.Main>
    </AppShell>
  );
}
