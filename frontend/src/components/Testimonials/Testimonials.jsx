import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "John Doe",
      description:
        "Our journey with Travel Trekker was absolutely incredible! The meticulous planning, personable guides, and unforgettable moments made it extraordinary. We’re eagerly anticipating our next adventure",
    },
    {
      pic: avatar2,
      name: "Jane Smith",
      description:
        "Travel Trekker surpassed all my expectations. From breathtaking landscapes to enriching encounters, every moment was a joy. The team's professionalism and personalized service made the trip truly memorable.",
    },
    {
      pic: avatar3,
      name: "Chris Johnson",
      description:
        "I’ve traveled with various agencies, but Travel Trekker is exceptional. The smooth planning, expert guidance, and distinctive destinations make them unique. It’s an amazing way to discover the world!",
    },
    {
      pic: avatar1,
      name: "Emily Davis",
      description:
        "Travel Trekker turned our dream vacation into reality. The thoughtfully planned itinerary, varied activities, and warm hospitality made for an experience we’ll always treasure. Highly recommended!",
    },
    {
      pic: avatar3,
      name: "Alex Turner",
      description:
        "Huge thanks to the Travel Trekker team for an unforgettable adventure. The perfect mix of excitement and relaxation made the trip amazing. I’ll definitely be booking my next trip with them.",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">Customer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
