import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <div className="header__menu">
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
