import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="page404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="backHome">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
