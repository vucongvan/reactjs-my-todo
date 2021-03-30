import { Link } from "react-router-dom";
import Routes from "../routes";

function Page3() {
  return (
    <div>
      <li>
        <Link to="/router/home">Home</Link>
      </li>
      <li>
        <Link to="/router/about">About</Link>
      </li>
      <li>
        <Link to="/router/dashboard">Dashboard</Link>
      </li>
    </div>
  );
}

export default Page3;
