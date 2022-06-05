import { Component } from "react";
import "./App.css";
import bn from "./flags/bn.jpg";
import cd from "./flags/cd.jpg";
import id from "./flags/id.jpg";
import la from "./flags/la.jpg";
import mm from "./flags/mm.jpg";
import my from "./flags/my.jpg";
import ph from "./flags/ph.jpg";
import sg from "./flags/sg.jpg";
import th from "./flags/th.jpg";
import vn from "./flags/vn.jpg";

import Slider from "react-slick";
import {
  Button,
  ChakraProvider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import { countryContent } from "./popContent";

const images = [
  {
    id: "1",
    name: "Brunei",
    alt: "",
    url: bn
  },
  {
    id: "2",
    name: "Cambodia",
    alt: "",
    url: cd
  },
  {
    id: "3",
    name: "Indonesia",
    alt: "",
    url: id
  },
  {
    id: "4",
    name: "Laos",
    alt: "",
    url: la
  },
  {
    id: "5",
    name: "Myanmar",
    alt: "",
    url: mm
  },
  {
    id: "6",
    name: "Malaysia",
    alt: "",
    url: my
  },
  {
    id: "7",
    name: "Philippines",
    alt: "",
    url: ph
  },
  {
    id: "8",
    name: "Singapore",
    alt: "",
    url: sg
  },
  {
    id: "9",
    name: "Thailand",
    alt: "",
    url: th
  },
  {
    id: "10",
    name: "Vietnam",
    alt: "",
    url: vn
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 150,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "slides",
    };

    return (
      <>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              <img
                className="sliderImg"
                src={image.url}
                alt={image.alt}
              />
              <ChakraProvider>
                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme='gray'>{image.name}</Button>
                  </PopoverTrigger>
                  <PopoverContent color='white' bg='blackAlpha.800' className="popMessage">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight='bold'>{image.name}</PopoverHeader>
                    <PopoverBody>{countryContent(image)}</PopoverBody>
                  </PopoverContent>
                </Popover>
              </ChakraProvider>              
            </div>
          );
        })}
      </Slider>
      </>
    );
  }
}
