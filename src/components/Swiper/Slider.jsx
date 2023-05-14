import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Pagination, Navigation } from "swiper";
import { styled } from "styled-components";
import slide1 from "./../../img/Slide1.jpg";
import slide2 from "./../../img/Slide2.jpg";
import slide3 from "./../../img/Slide3.jpg";
import Arrow from "./../../img/Vector.png";
import BlackArrow from "./../../img/BlackArrow.png";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1700px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 2160px;
  width: 100%;
  height: 950px;
  align-items: center;
  background-color: #f8f8fa;

  @media only screen and (max-width: 768px) {
    height: 500px;
  }
`;

const Slide1 = styled.div`
  display: flex;
  width: 440px;
  height: 570px;
  background-size: 110%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      205.96deg,
      rgba(67, 26, 26, 0) -7.14%,
      #431a1a 121.86%
    ),
    url(${slide1});
  justify-content: center;
  align-items: left;
  box-shadow: 0px 9px 0px -4px rgba(239, 85, 85, 1);
  -webkit-box-shadow: 0px 9px 0px -4px rgba(239, 85, 85, 1);
  -moz-box-shadow: 0px 9px 0px -4px rgba(239, 85, 85, 1);

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 285px;
  }
`;

const Slidediv1 = styled.div`
  display: flex;
  margin-top: 270px;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    gap: 0;
    margin-top: 180px;
  }
`;

const SlideTitle1 = styled.h1`
  text-align: left;
  margin: 0 40px 0 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const SlideText1 = styled.h2`
  text-align: left;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff6e;
`;

const Button1 = styled.button`
  width: 130px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: white;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.3s;
    background-image: url(${BlackArrow});
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 13px;
    background-color: rgba(255, 255, 255, 0.365);
  }
`;

const Slide2 = styled.div`
  display: flex;
  width: 440px;
  height: 570px;
  background-size: 110%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      205.96deg,
      rgba(67, 26, 26, 0) -7.14%,
      #431a1a 121.86%
    ),
    url(${slide2});
  justify-content: center;
  align-items: left;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 285px;
  }
`;

const Slidediv2 = styled.div`
  display: flex;
  margin-top: 315px;
  flex-direction: column;
  gap: 10px;
`;

const SlideTitle2 = styled.h1`
  text-align: left;
  margin: 0 40px 0 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #ffffff;
`;

const SlideText2 = styled.h2`
  text-align: left;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff6e;
`;

const Button2 = styled.button`
  width: 130px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: white;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.3s;
    background-image: url(${BlackArrow});
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 13px;
    background-color: rgba(255, 255, 255, 0.365);
  }
`;

const Slide3 = styled.div`
  display: flex;
  width: 440px;
  height: 570px;
  background-size: 110%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      205.96deg,
      rgba(67, 26, 26, 0) -7.14%,
      #431a1a 121.86%
    ),
    url(${slide3});
  justify-content: center;
  align-items: left;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 285px;
  }
`;

const Slidediv3 = styled.div`
  display: flex;
  margin-top: 270px;
  flex-direction: column;
  gap: 10px;
`;

const SlideTitle3 = styled.h1`
  text-align: left;
  margin: 0 40px 0 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #ffffff;
`;

const SlideText3 = styled.h2`
  text-align: left;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff6e;
`;

const Button3 = styled.button`
  width: 130px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: white;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.3s;
    background-image: url(${BlackArrow});
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 13px;
    background-color: rgba(255, 255, 255, 0.365);
  }
`;

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Section>
      <Container>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={100}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Slide1>
              <Slidediv1>
                <SlideTitle1>
                  There are many
                  <br /> variations of
                  <br /> passages
                </SlideTitle1>
                <SlideText1>22 April 2023</SlideText1>
                <Button1>See More</Button1>
              </Slidediv1>
            </Slide1>
          </SwiperSlide>
          <SwiperSlide>
            <Slide2>
              <Slidediv2>
                <SlideTitle2>
                  The point of using
                  <br /> Lorem Ipsum
                </SlideTitle2>
                <SlideText2>20 April 2023</SlideText2>
                <Button2>See More</Button2>
              </Slidediv2>
            </Slide2>
          </SwiperSlide>
          <SwiperSlide>
            <Slide3>
              <Slidediv3>
                <SlideTitle3>
                  I must explain to
                  <br /> you how all this <br />
                  mistaken idea
                </SlideTitle3>
                <SlideText3>19 April 2023</SlideText3>
                <Button3>See More</Button3>
              </Slidediv3>
            </Slide3>
          </SwiperSlide>
          <SwiperSlide>
            <Slide1>
              <Slidediv1>
                <SlideTitle1>
                  There are many
                  <br /> variations of
                  <br /> passages
                </SlideTitle1>
                <SlideText1>22 April 2023</SlideText1>
                <Button1>See More</Button1>
              </Slidediv1>
            </Slide1>
          </SwiperSlide>
          <SwiperSlide>
            <Slide2>
              <Slidediv2>
                <SlideTitle2>
                  The point of using
                  <br /> Lorem Ipsum
                </SlideTitle2>
                <SlideText2>20 April 2023</SlideText2>
                <Button2>See More</Button2>
              </Slidediv2>
            </Slide2>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
}
