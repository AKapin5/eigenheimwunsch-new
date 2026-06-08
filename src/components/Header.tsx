import React from "react";
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import logoSvg from "../assets/images/dist/logo.svg";
import logoMiniSvg from "../assets/images/dist/logo-mini.svg";
import logoInfoSvg from "../assets/images/dist/logo-info.svg";
import logoInfoMiniSvg from "../assets/images/dist/logo-info-mini.svg";
import logoPortalSvg from "../assets/images/dist/logo-portal.svg";
import logoPortalMiniSvg from "../assets/images/dist/logo-portal-mini.svg";
import { setFormStep } from "redux/actions/setFormStage";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeMobMenu, setActiveMobMenu] = React.useState<boolean>(false);

  const handleMobMenu = (): void => {
    setActiveMobMenu(!activeMobMenu);
  };

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  }

  const handleMortageScroll = () => {
    dispatch(setFormStep(1));
    if (location.pathname === '/') {
      scrollToForm();
    }
  }

  return (
    <header>
      <nav className='main-navbar'>
        <Link to="/" className='main-navbar__logo'>
          <img src={logoSvg} alt='logo icon' className='d-none d-sm-block' />
          <img src={logoMiniSvg} alt='logo mini icon' className='d-sm-none' />
        </Link>
        <a
          href="https://eigenheiminfo.de/"
          target="_blank"
          rel="noreferrer"
          className='main-navbar__logo main-navbar__logo-wunsch'
        >
          <img src={logoInfoSvg} alt='logo icon' className='logo__large'/>
          <img src={logoInfoMiniSvg} alt='logo mini icon' className='logo__small' />
        </a>
        <a
          href="http://eigenheimportal.de/"
          target="_blank"
          rel="noreferrer"
          className='main-navbar__logo main-navbar__logo-portal'
        >
          <img src={logoPortalSvg} alt='logo icon' className='logo__large'/>
          <img src={logoPortalMiniSvg} alt='logo mini icon' className='logo__small' />
        </a>
        <div
          className={
            activeMobMenu
              ? "main-navbar__toggle expanded"
              : "main-navbar__toggle"
          }
          onClick={handleMobMenu}
        >
          <div className='main-navbar__toggle__bar'></div>
        </div>
        <ul
          className={
            activeMobMenu
              ? "main-navbar__menu main-navbar__collapse expanded"
              : "main-navbar__menu main-navbar__collapse"
          }
        >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/partner">Partner werden</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li className='main-navbar__menu__calc'>
            <Link
              to={{
                pathname: '/',
                state: {
                  openRechner: true
                }
              }}
              onClick={handleMortageScroll}
            >
              Zum Rechner
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
