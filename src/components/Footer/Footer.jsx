import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link className="footer__nav--a" to="/characters">
          <FormattedMessage id="char" defaultMessage="personajes" />
        </Link>
        <Link className="footer__nav--a" to="/houses">
          <FormattedMessage id="houses" defaultMessage="casas" />
        </Link>
        <Link className="footer__nav--a" to="/chronology">
          <FormattedMessage id="chrono" defaultMessage="cronología" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
