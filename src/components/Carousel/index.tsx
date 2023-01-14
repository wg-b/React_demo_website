import { useState } from "react";
import React, { Component } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";

interface featuredItems {
  content: string;
  imageuri: string;
  time: string;
}

const items: featuredItems[] = [
	{
		imageuri: "./images/AFL-1.jpg",
		time: "11:00 AM – 6:00 PM",
		content:
			"IN PERSON | The Analog Film Lab",
	},
	{
		imageuri: "./images/DP1-2.jpg",
		time: "6:00 PM – 8:00 PM",
		content:
			"IN PERSON | Digital Photo I: The Basics (8 weeks)",
	},
	{
		imageuri: "./images/DP1-3.jpg",
		time: "8:30 PM – 10:30 PM",
		content:
			"ONLINE | Digital Photo I: The Basics (8 weeks)",
	},
	{
		imageuri: "./images/EPO_woman1.jpg",
		time: "1:00 PM – 4:00 PM",
		content:
			"IN-PERSON | Essential Portraiture (6 weeks)",
	},
	{
		imageuri: "./images/AFL-2.jpg",
		time: "11:00 AM – 6:00 PM",
		content:
			"IN PERSON | The Analog Film Lab",
	},
	{
		imageuri: "./images/AFL-3.jpg",
		time: "11:00 AM – 6:00 PM",
		content:
			"IN PERSON | The Analog Film Lab",
	},
];

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

export default function Carousel() {
  return (
    <Box py="50px">
        <Typography
            color={'black'} 
            fontWeight="700"
            fontSize="14px"
            sx={{
                px: 2,               
            }}
            >
            Featured Classes
        </Typography>    
      <Slider className="flex justify-around" {...settings}>
        
        {items.map((item: featuredItems) => (     
            
        <Box>
            <Box
            component={'div'}
            display={'flex'}
            alignItems={'center'} 
            sx={{
                outline: "none",
                cursor: "pointer",
                mt: 1,
            }}                    
            >
                <Box
                    component={"img"}
                    src={item.imageuri}
                    width={{ md: '90%', xs: '90%'}}
                    height={{ md: '90%', xs: '90%'}}
                    sx={{  
                        px: 2
                    }}
            	>
                </Box>                
		    </Box>
            <Typography
                display={'flex'}
                pt={"20px"}
                fontWeight="300"
                fontSize="14px"
                sx={{  
                    color: 'text.disabled',
                    px: 2,
                    fontFamily: "Libre Franklin",                    
                }}
                >
                {item.time}
            </Typography>
            <Typography
                color={'black'}                
                display={'flex'}
                fontWeight="700"
                fontSize="20px"
                sx={{  
                    cursor: "pointer",
                    px: 2,
                    "&:hover": {
						color: "#ffeb3b"
					},
                }}
                >
                {item.content}
            </Typography>   
            
        </Box>
        ))}
      </Slider>
    </Box>
  );
}
