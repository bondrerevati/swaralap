import React from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { guruData } from "../../guru-data";
import "./home.css";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import Accordion from "../../Components/Accordion/Accordion";
import { faqData } from "./../../faq-data";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <ImageSlider />
      <h1 className="home-title">Swaralap Music Acadamy</h1>
      {/* <h3 className="home-subtitle">Lorem Ipsum is Lorem Ipsum</h3> */}
      <h3 className="our-gurus">Our Gurus</h3>
      <div className="guru-images">
        {guruData.map((guru) => {
          return (
            <div className="guru-div">
              <img
                src={`./img/${guru.image}`}
                alt={guru.name}
                className="guru-image"
              />
              <div
                className="guru-details"
                // onClick={() => navigate(`/about#${guru.id}`)}
              >
                <div className="guru-name">{guru.guruName}</div>
                <div className="inst">{guru.instrument}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="about-short">
        <div className="about-text">
          <p>
            Since last 23 years, We are developing artist over Hinduatani
            Classical Music and also developing students by providing (ABGMV)
            Akhil Bhartiya gandharv Mahavidyalay's certified degree course i.e.
            "VISHARAD".
            <br />
            <br />
            Courses that we conduct:
            <br />
            Vocal (classical singing)
            <br />
            Harmonium
            <br />
            Tabla
            <br />
            Katthak
            <br />
            Casio/Key- Board
            <br />
            <br /> We also provide musical notes to N.R.I students of -
            U.K./CANADA .Etc.
            <br />
            <br />
            Why you should learn classical Music at Swaralap.?
            <br />
            1.Stage performing opportunities for students.
            <br />
            2. Perfect knowledge place for the students. (Personal attention
            given to each student by our teachers.)
            <br />
            3.performance opportunities for the disciples by various classical
            music festivals every year."
          </p>
        </div>
        {/* <div className="read-more">
          <button className="rm-btn">Read More</button>
        </div> */}
      </div>
      <ReviewSlider />
      <Accordion items={faqData} />
    </div>
  );
}
