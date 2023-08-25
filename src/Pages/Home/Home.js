import React from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { guruData } from "../../guru-data";
import "./home.css";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import Accordion from "../../Components/Accordion/Accordion";
import { faqData } from "./../../faq-data";
export default function Home() {
  return (
    <div>
      <ImageSlider />
      <h1 className="home-title">Swaralap Music Acadamy</h1>
      <h3 className="home-subtitle">Lorem Ipsum is Lorem Ipsum</h3>
      <h3 className="our-gurus">Our Gurus</h3>
      <div className="guru-images">
        {guruData.map((guru) => {
          return (
            <div className="guru-div">
              <img src={guru.image} alt={guru.name} className="guru-image" />
              <div className="guru-details">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            rutrum tellus, ut posuere sem. Donec euismod, nisi a ultrices
            lobortis, leo dui euismod ligula, ut mattis tellus dui feugiat sem.
            Morbi mollis fringilla ipsum ac rutrum. Nulla efficitur ligula ac
            viverra varius. Aliquam quis aliquam augue. Praesent vel nunc
            vulputate, elementum arcu a, ultrices felis. Quisque rhoncus
            faucibus est, sed consectetur leo varius at.
            <br />
            <br />
            Maecenas hendrerit, turpis nec sodales elementum, leo urna pulvinar
            velit, ac sodales ante orci eget turpis. Phasellus lobortis sem ac
            ligula molestie, non iaculis eros cursus. Donec et orci mauris. Cras
            mollis feugiat commodo. Etiam at velit in nisi vestibulum porta quis
            quis lectus. Ut nec commodo tellus. Morbi convallis porta interdum.
            Praesent purus velit, auctor eget luctus quis, vehicula fringilla
            est. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Quisque vel faucibus ex, in
            convallis nunc. Duis tempor ante sed dictum imperdiet. Sed placerat
            lectus in vestibulum venenatis. Mauris eleifend ex ac dignissim
            rutrum. Nulla quis felis porta, efficitur nibh ut, commodo quam.
            Nullam sit amet vehicula felis.
            <br />
            <br />
            Proin quis interdum erat. Duis imperdiet lacus vitae libero egestas
            tincidunt. Praesent interdum eros a nunc bibendum, nec efficitur
            mauris porttitor. Morbi venenatis suscipit lobortis. Etiam orci
            purus, elementum non molestie ut, pretium a elit. Vivamus hendrerit,
            mauris eget aliquet sollicitudin, purus nulla dignissim nibh, eu
            tempus lacus est et lacus. Pellentesque nibh urna, placerat at neque
            vel, tempor fermentum orci. Nulla nisl lacus, imperdiet vel mattis
            eu, mollis at erat. Suspendisse quis ante a quam consectetur
            ultricies et vitae velit.
          </p>
        </div>
        <div className="read-more">
          <button className="rm-btn">Read More</button>
        </div>
      </div>
      <ReviewSlider />
      <Accordion items={faqData}/>
    </div>
  );
}
