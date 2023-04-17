import "./style_notFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFound-container">
      <p className="heading-404">404</p>
      <div className="text-404">
        <p>
          Страница, на которую вы пытаетесь попасть, не существует или была
          удалена.
        </p>
        <p>
          {" "}
          Перейдите на <Link to="/">Главную страницу</Link>
        </p>
      </div>
    </div>
  );
}
export default NotFound;
