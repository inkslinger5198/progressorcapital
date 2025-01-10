import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Importing the arrow icons
import "./services.css"; // Make sure to style accordingly
import Growth from "../../assets/services/growth.svg";
import Capital from "../../assets/services/capital.svg";
import Debt from "../../assets/services/debt.svg";
import Strategic from "../../assets/services/strategic.svg";
import Merger from "../../assets/services/mergers.svg";

const Services = () => {
  const servicesData = [
    {
      title: "Growth Equity",
      icon: Growth,
      description:
        "We work closely with leadership teams to bring growth strategies to life, whether through capital raising, mergers and acquisitions, joint ventures, strategic partnerships, or add-on transactions.",
    },
    {
      title: "Capital Formation",
      icon: Capital,
      description:
        "Empowering businesses through strategic capital allocation and expert banking services. We connect elite investment funds with institutional capital.",
    },
    {
      title: "Debt Advisory",
      icon: Debt,
      description:
        "Customized financing solutions designed to meet the unique needs of businesses. Our expertise includes Purchase Order Financing, Asset-Based Lending (ABL), and more.",
    },
    {
      title: "Strategic Advisory",
      icon: Strategic,
      description:
        "Comprehensive advisory services tailored to drive sustainable business success. Our expertise includes corporate restructuring, risk management, and market strategy formulation.",
    },
    {
      title: "Mergers & Acquisitions",
      icon: Merger,
      description:
        "Our senior bankers bring deep industry relationships and strategic expertise to expertly navigate clients through both buy-side and sell-side transactions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 3 : prevIndex - 1
    );
  };


  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-down");
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);
  return (
    <div className="services-container" id="services" >
      <div className="services-heading">
        <p className="heading">Proficient Execution / Our Services</p>
        <p className="text">
          Leveraging unmatched value through profound domain expertise and a
          vast network of global relationships.
        </p>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="services-row" ref={serviceRef}>
            {servicesData
              .slice(currentIndex, currentIndex + 3)
              .map((service, index) => (
                <div className="service" key={index}>
                  <div className="service-icon">
                    <img src={service.icon} />
                  </div>
                  <p className="service-title">{service.title}</p>
                  <p className="line"> </p>
                  <p className="service-description sub-text">
                    {service.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="carousel-arrows">
          <FaArrowLeft className="carousel-arrow left" onClick={prevSlide} />
          <FaArrowRight className="carousel-arrow right" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Services;
