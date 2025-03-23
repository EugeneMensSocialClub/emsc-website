import { useState } from "react";
import { Box, Image, Text, Title } from "@mantine/core";
import clsx from "clsx";
import "../../assets/stylesheets/homepage.css";
import peterImage from "../../assets/images/Peter_M.png";

const testimonials = [
  {
    name: "Peter M.",
    text: "If it weren’t for the Eugene Men’s Social Club, I would’ve been alone waiting for my connecting flight back home.",
    image: peterImage,
  },
  {
    name: "Jacob R.",
    text: "Joining EMSC was the best thing I did after moving. Now I have real friends who show up for me.",
    image: peterImage,
  },
  {
    name: "Luis D.",
    text: "Trivia nights, LEGO builds, and open arms—that's what this group means to me.",
    image: peterImage,
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
        {testimonials.map((t, i) => (
          <Box
            key={i}
            className={clsx("testimonialImageWrapper", {
              active: i === activeIndex,
            })}
            onClick={() => setActiveIndex(i)}
          >
            <Image src={t.image} alt={t.name} className="testimonialImage" />
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
