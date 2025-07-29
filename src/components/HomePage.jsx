import React from "react";
import bannerImg from "../assets/home/desktop/image-hero-phone.png";

function HomePage() {
  return (
    <div className="homeWrapper">
      <section className="hero">
        <div className="banner-msg">
          <p>Award winning custom designs and digital branding solutions</p>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>
        <div className="banner-img"></div>
      </section>

      <section className="home-grid">
        <div className="web-design"></div>

        <div className="app-design"></div>
        <div className="graphic-design"></div>
      </section>
    </div>
  );
}

export default HomePage;
