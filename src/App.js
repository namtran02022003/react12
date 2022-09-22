import './App.css';



function App (){
    return (
        <div>
        <header>
          <a href="#" className="a-header">
            <i className="fa fa-map-marker w3-margin-right" />
            logo
          </a>
          <a style={{float: 'right'}} href="#" className="a-header">
            <i className="fa fa-search" />
          </a>
        </header>
        <div className="image-header">
          <img src="https://www.w3schools.com/w3images/london2.jpg" style={{width: '100%'}} />
          <div className="menu-header">
            <div className="menu-top">
              <button className="button-top red">
                <i className="fa fa-plane w3-margin-right" />
                flight
              </button>
              <button className="button-top">
                <i className="fa fa-bed w3-margin-right" />
                hotel
              </button>
              <button className="button-top">
                <i className="fa fa-car w3-margin-right" />
                rental
              </button>
            </div>
            <div className="div-padding">
              <h2>Travel the world with us</h2>
            </div>
            <div className="menu-float">
              <div className="menu-float-small">
                <label>form</label>
                <input style={{width: '100%', padding: '15px 0', border: '1px solid #ddd'}} type="text" placeholder="Departing from" />
              </div>
              <div className="menu-float-small">
                <label>form</label>
                <input style={{width: '100%', padding: '15px 0', border: '1px solid #ddd'}} type="text" placeholder="Arriving at" />
              </div>
            </div>
            <div className="div-padding">
              <button className="button-bottom">
                Search and find dates
              </button>
            </div>
          </div>
        </div>
        <div className="app">
          <h2>Good Offers Right Now</h2>
          <p>Up to 50% discount.</p>
          <div className="div-class">
            <div className="div-class-small1">
              <div className="div-po">
                <img src="https://www.w3schools.com/w3images/cinqueterre.jpg" width="100%" />
                <div className="div-text">
                  <p style={{fontSize: '24px'}}>Cinque Terre</p>
                </div>
              </div>
            </div>
            <div className="div-class-small2">
              <div className="menu-float">
                <div className="menu-float-small">
                  <div className="div-po">
                    <img className="img" src="https://www.w3schools.com/w3images/newyork2.jpg" width="100%" />
                    <div className="div-text">
                      <p style={{fontSize: '24px'}}>Cinque Terre</p>
                    </div>
                  </div>
                  <div className="div-po">
                    <img className="img" src="https://www.w3schools.com/w3images/newyork2.jpg" width="100%" />
                    <div className="div-text">
                      <p style={{fontSize: '24px'}}>Cinque Terre</p>
                    </div>
                  </div>
                </div>
                <div className="menu-float-small">
                  <div className="div-po">
                    <img className="img" src="https://www.w3schools.com/w3images/sanfran.jpg" width="100%" />
                    <div className="div-text">
                      <p style={{fontSize: '24px'}}>Cinque Terre</p>
                    </div>
                  </div>
                  <div className="div-po">
                    <img className="img" src="https://www.w3schools.com/w3images/newyork2.jpg" width="100%" />
                    <div className="div-text">
                      <p style={{fontSize: '24px'}}>Cinque Terre</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Good Offers Right Now</h2>
          <p>Up to 50% discount.</p>
          <div className="menu-float">
            <div className="menu-float-small">
              <div style={{backgroundColor: '#fff'}}>
                <img src="https://www.w3schools.com/w3images/ocean2.jpg" width="100%" />
                <div className="div-padding">
                  <h2>West Coast, Norway</h2>
                  <span style={{color: 'rgb(126, 121, 121)'}}>Roundtrip from $79</span>
                  <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                  <button className="button-fff">
                    buytickets
                  </button>
                </div>
              </div>
            </div>
            <div className="menu-float-small">
              <div style={{backgroundColor: '#fff'}}>
                <img src="https://www.w3schools.com/w3images/ocean2.jpg" width="100%" />
                <div className="div-padding">
                  <h2>West Coast, Norway</h2>
                  <span style={{color: 'rgb(126, 121, 121)'}}>Roundtrip from $79</span>
                  <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                  <button className="button-fff">
                    buytickets
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-opacity">
            <div className="div-padding">
              <h1 style={{paddingTop: '20px'}}>Get the best offers first!</h1>
              <p style={{margin: '15px 0'}}> Join our newsletter.</p>
              <label>email</label>
              <input type="text" placeholder="your email addres" className="input-body" />
              <button style={{backgroundColor: 'red'}} className="button-fff">
                buytickets
              </button>
            </div>
          </div>
          <h1>Contact</h1>
          <p style={{margin: '10px 0'}}>Let us book your next trip!</p>
          <form>
            <i className="fa fa-map-marker" style={{width: '30px'}} /> Chicago, US
            <br />
            <i className="fa fa-map-marker" style={{width: '30px'}} /> Chicago, US
            <br />
            <i className="fa fa-map-marker" style={{width: '30px'}} /> Chicago, US
            <br />
            <input type="text" placeholder="your email addres" className="input-body" />
            <input type="text" placeholder="your email addres" className="input-body" />
            <input type="text" placeholder="your email addres" className="input-body" />
            <button style={{backgroundColor: 'black', color: '#FFF', padding: '15px 20px'}} className="button-fff">
              SEND MESSAGE
            </button>
          </form>
          <footer>
            <h2>Find Us On</h2>
            <div className="list-icon">
              <i className="fa fa-facebook-official w3-hover-opacity" />
              <i className="fa fa-instagram w3-hover-opacity" />
              <i className="fa fa-snapchat w3-hover-opacity" />
              <i className="fa fa-pinterest-p w3-hover-opacity" />
              <i className="fa fa-twitter w3-hover-opacity" />
              <i className="fa fa-linkedin w3-hover-opacity" />
            </div>
            <p>Powered by w3.css</p>
          </footer>
        </div>
      </div>
    )
}
export default App;