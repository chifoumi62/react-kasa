import "../styles/error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <p className="error_text">404</p>
      <p className="error_p">oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error_a">
        retournez sur la page d'accueil
      </Link>
    </div>
  );
}
export default Error;
