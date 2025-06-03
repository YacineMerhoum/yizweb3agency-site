import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
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
          <a href="#!" target="_blank" rel="noopener noreferrer">Mentions légales</a>
          <a href="#!" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={20} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
