import "./App.scss";
import Entry from "./pages/Entry";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/enter' component={Entry} />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
