import React from "react";

import fbSvg from "../assets/images/dist/facebook.svg";

export const Footer: React.FC = () => {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='main-footer-copyright'>
            Copyright © 2022. EigenheimWunsch.de
          </div>
          <ul className='main-footer-list'>
            <li>
              <a href='https://www.facebook.com/EigenheimWunschde-103480531638962'>
                <img src={fbSvg} alt='facebook icon' />
              </a>
            </li>
            <li>
              <a href="/Impressum_EigenheimWunsch.pdf" >Impressum</a>
            </li>
            <li>
              <a href="/EigenheimWunsch_Datenschutzerklärung_März.pdf" >Datenschutzerklärung</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
