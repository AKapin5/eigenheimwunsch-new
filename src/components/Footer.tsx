import React from "react";
import { Link } from "react-router-dom";

import fbSvg from "../assets/images/dist/facebook.svg";

export const Footer: React.FC = () => {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='main-footer-copyright'>
            Copyright © 2026. EigenheimWunsch.de
          </div>
          <ul className='main-footer-list'>
            <li>
              <a href='https://www.facebook.com/EigenheimWunschde-103480531638962'>
                <img src={fbSvg} alt='facebook icon' />
              </a>
            </li>
            <li>
              <Link to='/impressum'>Impressum</Link>
            </li>
            <li>
              <Link to='/datenschutz'>Datenschutzerklärung</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
