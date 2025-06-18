import React, { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'  // on importe le fichier CSS

const Footer = () => {
  const [toastVisible, setToastVisible] = useState(false)

  const handleInstagramClick = (e) => {
    e.preventDefault()
    setToastVisible(true)
  }

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [toastVisible])

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            YW<sub>3</sub><span className="spanColor">A</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Yizweb3 Agency. Tous droits réservés.</p>
        </div>

        <div className="footer-right">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} className="icon" />
          </a>
          <a
            href="https://instagram.com"
            onClick={handleInstagramClick}
            aria-label="Instagram"
            className="icon instagram-link"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {toastVisible && (
        <div className="toast">
          Un peu de patience, mon Instagram n'est pas encore prêt :)
        </div>
      )}
    </footer>
  )
}

export default Footer
