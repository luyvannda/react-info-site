import logo from "./logo.svg"

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-left">
        <h2>Fun facts about React</h2>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including
            mobile apps</li>
        </ul>
      </div>
      <img className="main-logo-right" src={logo} alt="A React logo hidden in half"></img>
    </div>
  )
}