import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="main">
      <nav>
        <div className="logo">
          YW<sub>3</sub>
          <span className="spanColor">A</span>
        </div>
        <div className="links">
          <div>PRODUCTS</div>
          <div>SOLUTIONS</div>
          <div>CUSTOMER</div>
          <div>PRICING</div>
          <div>RESOURCES</div>
        </div>
        <button className="bt">REGISTER NOW &gt;</button>
        <div className="menu-toggle">&#9776;</div>
      </nav>

      <div className="head">
        <h1 className="firstTitle">
          YizWeb<sub>3</sub>
        </h1>
        <h1 className="secondTitle">Agency.</h1>
        <div className="circle1"></div>
      </div>

      <div className="flexbox">
        <div className="left">
          <div className="b1 box">
            <h1>240+</h1>
            <p>CLIENTS</p>
          </div>
          <div className="b2 box">
            <h1>92%</h1>
            <p>REACT TECHNOLOGY</p>
          </div>
        </div>

        <div className="mid">
          <img
            src="https://png.pngtree.com/png-clipart/20240925/original/pngtree-human-head-made-of-liquid-metal-png-image_16089761.png"
            alt="face"
          />
        </div>

        <div className="right">
          <p className="textUser">
            Créez votre site vitrine sur mesure dès aujourd’hui. Vous êtes une
            petite entreprise avec un besoin de visibilité à faible coût ? Vous
            êtes de la région roannaise ? Contactons-nous, et donnons vie à
            votre présence en ligne.
          </p>
          <button className="contact" onClick={() => setIsModalOpen(true)}>Me contacter</button>
          {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}

        </div>

        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Home;
