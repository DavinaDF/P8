import logoFooter from "../assets/images/logoKazaFooter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved </p>
    </div>
  );
};

export default Footer;
