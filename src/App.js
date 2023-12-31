import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import UserContext from "./components/Context/UserContext.js";
import Home from "./components/pages/Home.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={({ user: user }, { setUser: setUser })}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
