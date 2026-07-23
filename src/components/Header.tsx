import React from "react";
import { useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import logoSvg from "../assets/images/dist/logo.svg";
import logoMiniSvg from "../assets/images/dist/logo-mini.svg";
import logoInfoSvg from "../assets/images/dist/logo-info.svg";
import logoInfoMiniSvg from "../assets/images/dist/logo-info-mini.svg";
import logoPortalSvg from "../assets/images/dist/logo-portal.svg";
import logoPortalMiniSvg from "../assets/images/dist/logo-portal-mini.svg";
import homeHousesSvg from "../assets/images/dist/logo-home-houses.svg";
import homeHousesMiniSvg from "../assets/images/dist/logo-home-houses-mini.svg";
import { setFormStep } from "redux/actions/setFormStage";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
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

  const isHome = location.pathname === '/';

  return (
    <header>
      <style>{`
        .home-nav-btn {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 9px 12px;
          border-radius: 8px;
          text-decoration: none !important;
          background: transparent;
          color: #d88a98;
          transition: background 0.2s, color 0.2s;
          line-height: 1;
          cursor: pointer;
        }
        .home-nav-btn img.logo__large {
          width: 125px;
          height: 34px;
          display: block;
        }
        .home-nav-btn img.logo__small {
          width: 74px;
          height: 48px;
          display: none;
        }
        @media (max-width: 1065px) {
          .home-nav-btn img.logo__large {
            display: none;
          }
          .home-nav-btn img.logo__small {
            display: block;
          }
        }
        .home-nav-btn--active {
          background: #c0586e;
          color: #fff !important;
        }
        .home-nav-btn--active img {
          filter: brightness(0) invert(1);
        }
        .home-nav-btn:hover:not(.home-nav-btn--active) {
          background: rgba(216, 138, 152, 0.16);
          color: #ca7485;
        }
      `}</style>
      <nav className='main-navbar'>

        <a
            href="/"
            className={`home-nav-btn${isHome ? ' home-nav-btn--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              history.push('/', { showBanner: true });
            }}
        >
          <img src={homeHousesSvg} alt='home houses icon' className='logo__large' />
          <img src={homeHousesMiniSvg} alt='home houses mini icon' className='logo__small' />
        </a>

        <Link to="/" className='main-navbar__logo'>
          <img src={logoSvg} alt='logo icon' className='logo__large' />
          <img src={logoMiniSvg} alt='logo mini icon' className=' logo__small' />
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
