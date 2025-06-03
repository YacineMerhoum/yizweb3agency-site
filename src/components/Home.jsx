import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./Home.css";
import FadeInSection from "./FadeInSection";
import Footer from "./Footer";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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

      {/* ICI RAJOUTER SECTION */}
      {/* ICI RAJOUTER SECTION */}
      <FadeInSection>
      <div className="nextHead margin">
        <h1 className="titleMidle">Un site à l’image de votre entreprise.</h1>
        <p className="subtitleMidle">
          Donnez vie à votre présence en ligne avec une vitrine moderne, rapide
          et conçue pour convertir vos visiteurs en clients. Chez{" "}
          <strong>
            YizWeb<sub>3</sub> Agency
          </strong>
          , chaque détail compte.
        </p>
      </div>
      </FadeInSection>
       {/* ICI RAJOUTER SECTION */}
      {/* ICI RAJOUTER SECTION */}
      <FadeInSection>
      <div className="nextHead ">
        <h1 className="titleMidle">
          Proches de vous, propulsés par la technologie.
        </h1>
        <p className="subtitleMidle">
          Grâce à <strong>React</strong>, nous concevons des interfaces rapides,
          fluides et évolutives. Et parce que chaque projet est unique, nous
          vous accompagnons de A à Z, avec disponibilité et écoute.
        </p>
      </div>
      </FadeInSection>
         {/* ICI RAJOUTER SECTION */}
      {/* ICI RAJOUTER SECTION */}

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
        <FadeInSection>
        <div className="mid">
          <img
            src="https://png.pngtree.com/png-clipart/20240925/original/pngtree-human-head-made-of-liquid-metal-png-image_16089761.png"
            alt="face"
          />
        </div>
        </FadeInSection>

        <div className="right">
          <p className="textUser">
            Créez votre site vitrine sur mesure dès aujourd’hui. Vous êtes une
            petite entreprise avec un besoin de visibilité à faible coût ? Vous
            êtes de la région roannaise ? Contactons-nous, et donnons vie à
            votre présence en ligne.
          </p>
          <FadeInSection>
          <button className="contact" onClick={() => setIsModalOpen(true)}>
            Me contacter
          </button>
          </FadeInSection>
          {isModalOpen && (
            <ContactModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>

        <div className="circle2"></div>
      </div>
    </div>
    <Footer/>
    
    </>
  );
};

export default Home;
