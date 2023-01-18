// import logo from './logo.svg';
import "./App.css";
import "./GlobalStyles.js"
import { BrowserRouter as Router, 
  Route,
  Routes,
} from "react-router-dom";

import SignInPage from "./pages/SignIn";

function App() {
  return (
  //   <div className="App">
  //     {/* <header className="App-header"> */}
  //     {/* <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     Pup Track
  //     {/* </header> */}
  //     <div className="background-img"></div>
  //   </div>
  <Router>
    <Routes>
    <Route exact path="/" element={<SignInPage/>} />
    <Route path="/sign-up" />
    </Routes>
  </Router>
  );
}

export default App;
