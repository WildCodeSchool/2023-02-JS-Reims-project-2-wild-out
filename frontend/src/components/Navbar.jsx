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

      <div className="phrase">
        <form>
          <h1> Que souhaitez-vous faire aujourd'hui ?</h1>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
