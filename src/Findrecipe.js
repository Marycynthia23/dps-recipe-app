import Easychicken from './images/Easy-Chicken-Fry-Recipe.jpg';
import Roasted from './images/Indian-spiced-roast-chicken-1.jpg';
import Boiled from './images/Palak-Chicken-Saag-Recipe.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
    <div>
        <h3>Find Recipes</h3>
        <div class="sb-example-1">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="Search recipe"/>
            {/* <button type="submit" class="searchButton"> */}
            <i class="bi bi-search"></i>
           {/* </button> */}
         </div>
      </div>
      <h4>Catergories</h4>
      <div className="d-flex catergory justify-content-evenly">
          <div><img alt="" src={Easychicken} /><br/>Soup</div>
          <div><img alt="" src={Boiled} /><br/>Meat</div>
          <div><img alt="" src={Easychicken}/><br/>Fries</div>
          <div><img alt="" src={Boiled}/><br/>Boiled</div>
          <div><img alt="" src={Roasted}/><br/>Roasted</div>
      </div>
    <div className="hero-cont">
        <h4>Recommended</h4>
        <div className="d-flex cardbox justify-content-evenly">
                <div className="card">
                    <img src={Roasted} className="card-img-top" alt=""/>
                          <div className="card-body">
                              <p className="card-text"> make up the bulk of the card's content.
                              <div><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                              <i class="bi bi-star"></i> <span><i class="bi bi-heart"></i></span></div></p>
                          </div>
                    </div>
                    <div className="card">
                    <img src={Roasted} className="card-img-top" alt=""/>
                          <div className="card-body">
                              <p className="card-text"> make up the bulk of the card's content.
                              <div><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                              <i class="bi bi-star"></i> <span><i class="bi bi-heart"></i></span></div></p>
                          </div>
                    </div>
                    <div className="card">
                    <img src={Roasted} className="card-img-top" alt=""/>
                          <div className="card-body">
                              <p className="card-text"> make up the bulk of the card's content.
                              <div><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                              <i class="bi bi-star"></i> <span><i class="bi bi-heart"></i></span></div></p>
                          </div>
                    </div>
                    <div className="card">
                    <img src={Roasted} className="card-img-top" alt=""/>
                          <div className="card-body">
                              <p className="card-text"> make up the bulk of the card's content.
                              <div><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                              <i class="bi bi-star"></i> <span><i class="bi bi-heart"></i></span></div></p>
                          </div>
                    </div>
          </div>
                
        </div>





    </div>
    </div>
      
    </div>
  );
}

export default App;
