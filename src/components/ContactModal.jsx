import React, { useState } from "react";
import "./ContactModal.css";

const ContactModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Doit correspondre à la durée de fadeOut (0.3s)
  };

  return (
    <div className="modal">
      <div className={`modal-content ${isClosing ? "fade-out" : ""}`}>
        <h2>Contactez-nous</h2>
        <p>
          Envoyez un mail à <strong>yizweb3agency@gmail.com</strong>
        </p>
        <button className="close-btn" onClick={handleClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
