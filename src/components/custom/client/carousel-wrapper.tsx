"use client";

import { useEffect, useState } from "react";
import { CarouselMobile } from "../carousel-mobile";
import { RotatingImageCarousel } from "./rotating-image-carousel";
import { useMediaQuery } from "react-responsive";

interface NavigationWrapperProps {
  images: { src: string; alt: string; description: string }[];
}

export const CarouselWrapper: React.FC<NavigationWrapperProps> = (props) => {
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {isSmall ? (
        <CarouselMobile images={props.images} />
      ) : (
        <RotatingImageCarousel images={props.images} />
      )}
    </>
  );
};
