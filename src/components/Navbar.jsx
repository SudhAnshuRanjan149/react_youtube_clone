// GLOBAL
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// LOCAL
import logo from "./../asset/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" height={42} />
          <div className="youtube-title">YouTube Clone</div>
        </Link>

        <SearchBar />
      </div>
    </>
  );
};

export default Navbar;
