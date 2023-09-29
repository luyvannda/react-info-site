import logo from "./logo.svg"

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img className="nav-logo" src={logo} alt="A react logo"></img>
        <h1>ReactFacts</h1>
      </div>
      <div className="nav-right">
        <p>React Course - Project 1</p>
      </div>
    </nav>
  )
}