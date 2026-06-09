'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeMobMenu, setActiveMobMenu] = useState<boolean>(false);

  const handleMobMenu = (): void => {
    setActiveMobMenu(!activeMobMenu);
  };

  return (
    <header>
      <nav className="main-navbar">
        <Link href="/" className="main-navbar__logo">
          <img
            src="/images/dist/logo.svg"
            alt="logo icon"
            className="d-none d-sm-block"
          />
          <img
            src="/images/dist/logo-mini.svg"
            alt="logo mini icon"
            className="d-sm-none"
          />
        </Link>
        <a
          href="https://eigenheiminfo.de/"
          target="_blank"
          rel="noreferrer"
          className="main-navbar__logo main-navbar__logo-wunsch"
        >
          <img
            src="/images/dist/logo-info.svg"
            alt="logo icon"
            className="logo__large"
          />
          <img
            src="/images/dist/logo-info-mini.svg"
            alt="logo mini icon"
            className="logo__small"
          />
        </a>
        <a
          href="http://eigenheimportal.de/"
          target="_blank"
          rel="noreferrer"
          className="main-navbar__logo main-navbar__logo-portal"
        >
          <img
            src="/images/dist/logo-portal.svg"
            alt="logo icon"
            className="logo__large"
          />
          <img
            src="/images/dist/logo-portal-mini.svg"
            alt="logo mini icon"
            className="logo__small"
          />
        </a>
        <div
          className={
            activeMobMenu
              ? 'main-navbar__toggle expanded'
              : 'main-navbar__toggle'
          }
          onClick={handleMobMenu}
        >
          <div className="main-navbar__toggle__bar"></div>
        </div>
        <ul
          className={
            activeMobMenu
              ? 'main-navbar__menu main-navbar__collapse expanded'
              : 'main-navbar__menu main-navbar__collapse'
          }
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/partner">Partner werden</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
          <li className="main-navbar__menu__calc">
            <Link href="/">Zum Rechner</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
