import React from "react";
import "./home.css";
import Container from "../../component/container/Container";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Cards from "../../component/cards/Cards";

import skin from "../../assets/img/skin.png";
import body from "../../assets/img/body.png";
import hair from "../../assets/img/hair.png";
import makeup from "../../assets/img/makeup.png";
import offerImg from "../../assets/img/offerImg.jpg";
import ReviewsSlider from "../../component/websiteReviews/ReviewsSlider";
import Footer from "../../component/footer/Footer";

const serviceData = [
  {
    id: 1,
    img: skin,
    imgCircle: "skin",
    title: " skin care",
    about:"We're here to help you get your best skin routine for your skin journey.",
  },
  {
    id: 2,
    img: hair,
    imgCircle: "hair",
    title: " hair care",
    about: "Locks of Luxury: Your One-Stop Hair Care Product Store",
  },
  {
    id: 3,
    img: body,
    imgCircle: "body",
    title: " body care",
    about: "Purely Pampered: Your Ultimate Body Care Product Destination",
  },
  {
    id: 4,
    img: makeup,
    imgCircle: "makeup",
    title: " makeup care",
    about: "Discover Your Signature Look: The Best Makeup Products for Every Style at Our Store",
  },
];

function Home() {
  return (
    <>
      <main>
        <Header>
          <Navbar />
        </Header>
        {/* *************************************** sell best sellers section ****************************************** */}
        <section className="se_best_sell section  ">
          <h2 className="section_title mb-16 ">SALE BEST SELLERS</h2>
          <Cards discount={false} />
        </section>

        {/* *************************************** about section ****************************************** */}
        <section className="about section">
          <Container>
            <h2 className="section_title">why our clients choose us</h2>
            <div className="about_box w-full h-fit bg-bg-main pt-8 xsm:px-4 sm:px-8 md:px-16 px-32 pb-20 my-16 xsm:my-8 sm:my-10  mx-auto rounded">
              <h6 className="h6 text-center mb-11">
                Welcome to our skincare and makeup store
              </h6>
              <p className="text-base xsm:text-sm sm:text-sm md:text-sm text-center font-normal m-auto break-words ">
                Our brand was founded with a simple mission: to empower women to
                feel confident and beautiful in their own skin. We believe that
                everyone deserves access to high-quality skincare and makeup
                products that are effective, safe, and sustainable.
              </p>
            </div>
            {/* *************************************** services section ****************************************** */}
            <div className="services max-w-[1400px] mx-auto">
              <h2 className="section_title">Our services</h2>
              <p className="text-center text-base xsm:text-sm font-light">
                Skin care is a personal journey and we're here to guide you
                along the way
              </p>
              {/* flex flex-row align-middle justify-center */}
              <div className="services_lists grid md:grid-rows-2 sm:grid-rows-2 xsm:grid-rows-4  grid-cols-4  md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1">
                {serviceData.map((data) => {
                  return <Services {...data} key={data.id} />;
                })}
              </div>
            </div>
          </Container>
        </section>
        {/* *************************************** offering section ****************************************** */}
        <section className="se_offering section">
          <div
            className="offering_titleBox h-[400px] w-full md:h-[600px] sm:h-[600px] xsm:h-full
          grid grid-cols-2 grid-rows-1 xsm:grid-rows-2 sm:grid-rows-2 md:grid-rows-2 xsm:grid-cols-1  sm:grid-cols-1 md:grid-cols-1 "
          >
            <div className="offerImg h-full">
              <img
                src={offerImg}
                alt="offer image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="offerTitle h-full bg-bg-bejiKal pt-20 pb-10 px-16 xsm:px-4 xsm:pt-8">
              <h2 className=" xsm:h4 sm:h4 md:h4 h3 text-center text-purple-text xsm:pt-[5vh]">
                Explore Our Range of Offerings
              </h2>
              <h4 className="h4 text-center pt-6 lg:pt-10 xl:pt-10 2xl:pt-10">
                Discover Something New Today
              </h4>
            </div>
          </div>

          <div className="overing_products">
            <Cards discount={true} />
          </div>
        </section>

        {/* *************************************** Reviews section ****************************************** */}
        <section className="se_reviews section bg-bg-main py-16">
          <div className="max-w-[500px] mx-auto ">
            <h2 className="section_title">REAL PEOPLE, REAL REVIEWS</h2>
            <p className="text-center text-base xsm:text-sm font-light">
              Here's what you have to say about your experience with skin care &
              makeup website
            </p>
          </div>

          <div className="overing_products">
            {/* <Cards discount={true}/> */}
            <ReviewsSlider/>
          </div>
        </section>
        
      </main>
      <Footer/>
     
    </>
  );
}

export default Home;

function Services({ img, title, about,imgCircle }) {
  return (
    <div className="service relative w-60 my-10 mx-auto  h-fit ">
      <div className={`service_img ${imgCircle}_circle w-full h-full`}>
        <img
          src={img}
          alt="skin service image "
          className="w-[110px] h-[150px] mx-auto pt-12"
        />
      </div>
      <div className="service_about mx-auto mt-2">
        <h6 className="h6 capitalize text-center mt-4">{title}</h6>
        <p className="text-center text-sm font-light mt-1 ">{about}</p>
      </div>
    </div>
  );
}
