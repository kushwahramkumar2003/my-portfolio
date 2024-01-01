import "./App.css";
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
