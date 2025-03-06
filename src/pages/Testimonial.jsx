import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "vivek sicka",
    location: "India",
    img: "assets/img/testimonial-2.jpg",
    text: "We booked a thailand trip and arrangement done by the agency was excellent, they have guided us properly, agency representatives was in touch with us from the starting to ending of our trip.",
  },
  {
    name: "SHANTANU CHATTERJEE",
    location: "India",
    img: "assets/img/testimonial-2.jpg",
    text: "We recently had the pleasure of traveling with Prithvi Travel, and we must say it was an exceptional experience.",
  },
  {
    name: "Nikhil Yadav",
    location: "Inida",
    img: "assets/img/testimonial-3.jpg",
    text: "I had a never forgetting experience with Prithvi Travels. I booked for East, North, West Sikkim & Darjeeling. But due to landslides in that region I had to do the south Sikkim tour but it was a great experience at the end.",
  },
  {
    name: "Nikita Sampang Rai",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "One of the best and trustworthy travel company in siliguri for air tickets. I avail the service from last two years and their team is very trustworthy and professional. ",
  },
  {
    name: "Mash Group",
    location: "India",
    img: "assets/img/testimonial-3.jpg",
    text: "A Truly Professional Travel Company who takes utmost pride in their work. Be it from welcoming their Guests to taking care of each small bit of Service and Hospitality!!!!!",
  },
  {
    name: "Sampreeti Basak",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "I had an excellent experience with Pritvi travel for my passport application process. Their team was incredibly helpful and professional throughout.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={testimonial.img}
                alt={testimonial.name}
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.location}</p>
              <p className="mb-0">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;