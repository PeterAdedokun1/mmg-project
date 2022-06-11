import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './NavBar';
import { useState } from 'react';
function App() {
  const [navtoggle, setNavtoggle] = useState(false)
  return (
    <div className="App">
      <div className={`sidebar ${navtoggle ? "nav-toggle" : ""  }`}>
        <NavBar/>
      </div>
      <div className="nav-btn" onClick={()=> setNavtoggle(!navtoggle)}>
        <img src="./menu 1.png" alt="" />


      </div>
      <div className='top-img'>
        <img src="./top.png" alt="" />

      </div>


      <div className="main-content">
        <div className='top-element'>
        <h1>Loans</h1>
        <p><span>Monday,</span>21st February,2021</p>
       
        </div>

        <div className="container">
          <div className="item">
            <div className="inner">
              <img src="./One Month.png" alt="" />
              <h4>One Month Loan</h4>
              <p>Access funds for personal upkeep for 30 days</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./OBJECTS.png" alt="" />
              <h4>Working Capital Overdraft</h4>
              <p>Access continuous funds to grow your business stocks and inventory</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./loan.png" alt="" />
              <h4>Operation Overdraft</h4>
              <p>Financing for your business operations</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./car.png" alt="" />
              <h4>T and T Spread Loan</h4>
              <p> Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./structure.png" alt="" />
              <h4>Infastructure Loan</h4>
              <p>Facility for your business to purchase vehicles, assets, and building upgrades.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./Personal.png" alt="" />
              <h4>Personal Loan</h4>
              <p>Instant funds for your personal expenses.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./Pawn.png" alt="" />
              <h4>Pawn Loan</h4>
              <p>Get cash value on temporary sale of your items within 72hours.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="./dollar.png.png" alt="" />
              <h4>FX line</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}

export default App;


//stop 23minss