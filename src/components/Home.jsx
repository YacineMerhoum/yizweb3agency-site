import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ContactModal from "./ContactModal";
import "./Home.css";
import FadeInSection from "./FadeInSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Yizweb3 Agency - Création de sites web modernes & réactifs</title>
        <meta
          name="description"
          content="Yizweb3 Agency vous accompagne dans la création de votre site vitrine, rapide, professionnel et optimisé. Disponible, flexible, et orienté conversion."
        />
        <meta
          name="keywords"
          content="freelance web, création site vitrine, React, développeur freelance, agence web, yizweb3"
        />
        <meta name="author" content="Yizweb3 Agency" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yizweb3-agency.vercel.app/" />
      </Helmet>
    <div className="main">
      <nav>
        <div className="logo">
          YW<sub>3</sub>
          <span className="spanColor">A</span>
        </div>
        <div className="links">
        <a href="#contact" className="nav-link">Me contacter</a>
        </div>
        {/* <button className="bt">REGISTER NOW &gt;</button>
        <div className="menu-toggle">&#9776;</div> */}
      </nav>
      <div className="head">
      
      <FadeInSection>
        <h1 className="firstTitle">
          YizWeb<sub>3</sub>
        </h1>
        <h1 className="secondTitle">Agency.</h1>
      </FadeInSection>
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

      <div className="flexbox" id="contact">
        <div className="left">
          <div className="b1 box">
            <h1>240+</h1>
            <p>PROJECTS</p>
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
            petite entreprise avec un besoin de visibilité à faible coût ?  
            Contactons-nous, et donnons vie à
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
    <ScrollToTop />
    <Footer/>
    
    </>
  );
};

export default Home;
