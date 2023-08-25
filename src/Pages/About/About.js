import React from "react";
import "./about.css";
import { guruData } from "../../guru-data";
export default function About() {
  return (
    <div>
      <div className="b-img-div">
        <img
          src="https://i.ibb.co/58Mq6Mb/slide1.jpg"
          className="b-img"
          alt=""
        />
      </div>
      <div className="about-text-long">
        <h3 className="about-head">About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna
          mi, condimentum sit amet aliquet at, pretium sed velit. Integer
          elementum tristique massa sit amet egestas. Praesent mi leo, hendrerit
          vel sollicitudin vel, facilisis vitae orci. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nam a lobortis urna, quis tincidunt velit. Quisque sed lacus
          eget justo cursus suscipit. Integer hendrerit sem lorem, et vestibulum
          nunc varius a. Donec sodales est at velit imperdiet, in tempor massa
          accumsan. Nam pulvinar pulvinar dui, elementum feugiat orci sagittis
          vitae. Ut dapibus ultricies leo sit amet consequat. Mauris sem arcu,
          blandit ac metus vel, rhoncus vestibulum mi. Pellentesque a placerat
          nibh. Suspendisse in metus non nibh accumsan ultricies et at magna.
          Donec imperdiet, nibh eget tincidunt blandit, dolor dolor efficitur
          metus, vel efficitur massa orci non augue.
          <br />
          <br />
          Phasellus scelerisque pretium augue, eget commodo nisl iaculis vitae.
          Nunc non ultrices massa, maximus rhoncus odio. Proin malesuada pretium
          nunc sed sollicitudin. Quisque egestas nibh sed elit pulvinar dapibus.
          Aenean porta scelerisque justo, id aliquet odio. Nunc aliquet, tellus
          vitae scelerisque viverra, sapien risus viverra leo, vitae dictum
          ligula velit sit amet est. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. In dignissim leo id
          elementum lacinia. Duis eu enim quis dolor hendrerit pretium.
          Pellentesque sed lacinia neque. Donec tempus tristique est. Ut
          bibendum ullamcorper ex, sit amet rutrum nisi dignissim nec. Etiam
          quis purus non justo placerat tincidunt. Phasellus ut ullamcorper
          quam. Sed elementum eros mi, vitae accumsan mauris blandit eu. In eget
          sem tincidunt, malesuada quam at, congue leo.
          <br />
          <br />
          Vestibulum quam diam, imperdiet et tincidunt a, rutrum at nulla. Cras
          ac metus at dui molestie condimentum. Suspendisse et ex nibh. Maecenas
          lacinia hendrerit porttitor. Nunc fermentum facilisis vestibulum.
          Phasellus vulputate erat sit amet leo iaculis, ut viverra felis
          rutrum. Fusce accumsan laoreet purus, at ultricies neque volutpat et.
          Nam at lobortis risus. Proin dictum eu libero vel porta. Pellentesque
          at justo viverra, sodales quam eget, congue tortor.
          <br />
          <br />
          Maecenas consequat dolor quis auctor facilisis. Quisque condimentum
          velit ultrices augue mattis elementum. Phasellus erat neque, blandit
          quis rhoncus quis, cursus sed enim. Nullam varius enim ante, quis
          mattis tortor porttitor quis. Morbi cursus sapien vel velit venenatis
          mollis. Vestibulum non scelerisque sem. Nulla bibendum massa vel metus
          fermentum placerat. Morbi sed molestie ligula. Nullam dapibus risus
          quis massa pretium, feugiat mollis mauris luctus.
          <br />
          <br />
          Aliquam erat volutpat. Praesent congue facilisis sem ut faucibus.
          Integer sed auctor justo. Nullam laoreet elit a nibh ultricies, ac
          ullamcorper ex porta. Ut imperdiet lectus vel convallis mollis. Morbi
          sed tincidunt dolor, sed congue elit. Sed sed enim leo. Mauris
          placerat magna non ex semper, ac cursus magna dictum. Nunc id purus
          bibendum, finibus quam vitae, accumsan dui. Duis placerat sem vitae
          vestibulum euismod. Donec congue aliquam nulla, ac hendrerit nisl
          finibus sit amet. Aliquam finibus consequat nibh, et dictum ligula
          vehicula vitae. Donec bibendum erat at lectus dictum, eu dapibus
          turpis viverra. Phasellus vel suscipit ex. Sed pharetra tellus
          maximus, placerat velit sed, imperdiet elit. Fusce varius interdum
          velit id venenatis.
          <br />
          <br />
          Nunc efficitur risus vel sapien consequat pulvinar. Suspendisse
          potenti. Quisque aliquam sed elit egestas finibus. Maecenas vitae
          volutpat nibh, eget imperdiet leo. Donec at magna mollis, tempus
          tortor vitae, aliquet leo. Mauris eleifend leo vel ultricies
          malesuada. Ut mattis, turpis at faucibus euismod, turpis dui gravida
          leo, vel lacinia tortor lectus id lorem. In eu ipsum tincidunt,
          tincidunt ipsum vel, vulputate nisi. Morbi ac sollicitudin elit, a
          elementum elit. Pellentesque vel tellus nec neque laoreet mattis.
          Vestibulum sapien augue, laoreet eu mauris non, lobortis faucibus
          velit. In diam magna, ornare vel imperdiet id, commodo eget nisl.
          Etiam euismod euismod augue, luctus finibus dolor posuere vel. Nullam
          bibendum nunc leo, ac facilisis erat cursus vel. Fusce venenatis,
          tellus ac ultricies condimentum, lorem nulla consectetur mauris, eget
          convallis urna orci sed odio. Quisque ultricies nibh ut blandit
          semper.
        </p>
      </div>
      <div className="guru-det-div">
        {guruData.map((guru) => {
          return (
            <div className="guru-detail">
              <div className="guru-img-div">
                <img className="guru-img" src={guru.image} alt="" />
              </div>
              <div className="guru-det">
                <h4>{guru.guruName}</h4>
                <h4>{guru.instrument}</h4>
                <p>{guru.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
