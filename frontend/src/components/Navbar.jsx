import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./src/assets/superlogo.png"
        alt="logo du site"
      />
      <img
        className="wildout"
        src="./src/assets/supertitre.png"
        alt="wild-out"
      />
    </nav>
  );
}

export default Navbar;
