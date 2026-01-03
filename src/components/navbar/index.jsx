import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul>
        <li>
          <Link to="/home">
            <img src="../Lunar_Tear.webp" alt="home icon" width={24} />
          </Link>
        </li>
        <li>
          <Link to="/yorha">YoRHa</Link>
        </li>
        <li>
          <Link to="/androids">Androids</Link>
        </li>
        <li>
          <Link to="/machines">Machines</Link>
        </li>
        <li>
          <Link to="world">World</Link>
        </li>
      </ul>
    </div>
  );
};
