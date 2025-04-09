import { useState } from "react";
import { Box, Image, Text, Title } from "@mantine/core";
import useIsMobile from "../../hooks/useIsMobile";
import clsx from "clsx";
import peterImage from "../../assets/images/Peter_M.png";
import joshuaImage from "../../assets/images/Joshua_G.png";
import tomImage from "../../assets/images/Tom_B.png";
import "../../assets/stylesheets/homepage.css";
import { Carousel } from "@mantine/carousel";

const testimonials = [
  {
    name: "Peter M.",
    text: "If it weren’t for the Eugene men’s social club, I would’ve been alone waiting for my connecting flight back.",
    image: peterImage,
  },
  {
    name: "Jacob R.",
    text: "Joining EMSC was the best thing I did after moving. Now I have real friends who show up for me.",
    image: joshuaImage,
  },
  {
    name: "Luis D.",
    text: "With EMSC, I've been able to relive my childhood by playing with Legos with my friends.",
    image: tomImage,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Box className="testimonialSection">
      <Title order={2} className="testimonialHeading">
        From Our Members
      </Title>
      <Box className="testimonialImages">
        {isMobile ? (
          <>
            <Carousel
              onSlideChange={(progress) => {
                const index = Math.round(progress);
                setActiveSlide(index);
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Slide key={index} className="testimonialSlide">
                  <Box
                    key={index}
                    className={clsx("testimonialImageWrapper", {
                      active: index === activeSlide,
                    })}
                    onClick={() => setActiveSlide(index)}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonialImage"
                    />
                  </Box>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        ) : (
          <>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                className={clsx("testimonialImageWrapper", {
                  active: index === activeIndex,
                })}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonialImage"
                />
              </Box>
            ))}
          </>
        )}
      </Box>
      <Box
        key={activeIndex}
        className={`testimonialTextWrapper ${
          isFading ? "fade-out" : "fade-in"
        }`}
      >
        {isMobile ? (
          <>
            <Text className="testimonialText">
              “{testimonials[activeSlide].text}”
            </Text>
            <Text className="testimonialName">
              {testimonials[activeSlide].name}
            </Text>
          </>
        ) : (
          <>
            <Text className="testimonialText">
              “{testimonials[activeIndex].text}”
            </Text>
            <Text className="testimonialName">
              {testimonials[activeIndex].name}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
}
