import { useState } from "react";
import { Box, Image, Text, Title } from "@mantine/core";
import clsx from "clsx";
import peterImage from "../../assets/images/Peter_M.png";
import joshuaImage from "../../assets/images/Joshua_G.png";
import tomImage from "../../assets/images/Tom_B.png";
import "../../assets/stylesheets/homepage.css";

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
  const [isFading] = useState(false);

  return (
    <Box className="testimonialSection">
      <Title order={2} className="testimonialHeading">
        From Our Members
      </Title>
      <Box className="testimonialImages">
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
      </Box>
      <Box
        key={activeIndex}
        className={`testimonialTextWrapper ${
          isFading ? "fade-out" : "fade-in"
        }`}
      >
        <Text className="testimonialText">
          “{testimonials[activeIndex].text}”
        </Text>
        <Text className="testimonialName">
          {testimonials[activeIndex].name}
        </Text>
      </Box>
    </Box>
  );
}
