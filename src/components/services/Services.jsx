import React from "react";
import "./services.css";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const servicesData = [
  {
    title: "Capital Formation",
    description:
      "Empowering businesses through strategic capital allocation and expert banking services. We connect elite investment funds with institutional capital through strategic introductions and comprehensive investor relations.",
  },
  {
    title: "Growth Equity",
    description:
      "We work closely with leadership teams to bring growth strategies to life, providing hands-on support to help businesses grow and succeed.",
  },
  {
    title: "Debt Advisory",
    description:
      "Customized financing solutions, including Purchase Order Financing, Asset-Based Lending, Cash Flow-Based Lending, and Venture Debt.",
  },
  {
    title: "Strategic Advisory",
    description:
      "Comprehensive services tailored to drive sustainable business success, including corporate restructuring, risk management, and market strategy formulation.",
  },
  {
    title: "Mergers and Acquisitions",
    description:
      "Expert guidance for buy-side and sell-side transactions, delivering premium valuations and flawless execution.",
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="services-container" id="services">
      <div className="services-heading">
        <p className="heading">Profecient Execution/Our Services</p>
        <p className="text">
          Leveraging unmatched value through profound domain expertise and a
          vast network of global relationships.
        </p>
      </div>
      <div className="services-carousel">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div className="carousel-item" key={index}>
              <div className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider> 
        
      </div>
    </div>
  );
};

export default Services;
