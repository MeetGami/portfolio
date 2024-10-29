import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/home/home";
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}
export default App;