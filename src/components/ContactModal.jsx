import React, { useEffect, useRef, useState } from "react";
import "./ContactModal.css";

const ContactModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus automatique sur le bouton à l’ouverture
    closeButtonRef.current?.focus();

    // Fermer avec la touche "Esc"
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Nettoyer l’écouteur quand la modale se ferme
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`modal-content ${isClosing ? "fade-out" : ""}`}>
        <h2 id="modal-title">Contactez-nous</h2>
        <p>
          Envoyez un mail à{" "}
          <strong>
            <a href="mailto:yizweb3agency@gmail.com">
              yizweb3agency@gmail.com
            </a>
          </strong>
        </p>
        <button ref={closeButtonRef} className="close-btn" onClick={handleClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
