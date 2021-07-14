import logo from './images/YAMFEASTlogo.png';
import './App.css';
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="App">
      <div className="container-fluid">
      {/* <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> */}
      <img className="logo" alt="" src={logo} />
      <br />
      <br />
      <br />
      <Link to="/Findrecipe"><button class="btn " type="button">Get started</button></Link>
      </div>
      
    </div>
  );
}

export default Landingpage;
