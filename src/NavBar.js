import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePage from './Pages/HomePage'
const NavBar = () => {
  return (
      <div className='navbar'>
          
          <nav className="nav">
              <div>
                    <div className="profile">
                  <img src="./cloudbank 1.png" alt="" />
          </div>

                   <ul className="nav-items">
                  <li className="nav-item">
                          <NavLink to="/home" className="link" >
                                  <img src="./dashboard 1.png" alt="" />
                                  <span>Home</span>
                      </NavLink>
                      </li>
                  <li className="nav-item">  
                          <NavLink to="/money" className="link" >
                                  <img src="./Group.png" alt="" />
                                  <span>Send Money</span>
                      </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/invest" className="link">
                                    <img src="./investment line 1.png" alt="" />
                              <span>Investment</span>
                              
                      </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/" className="link"  >
                                     <img src="./investment line 1.png" alt="" />
                              <span>Loan</span>
                             
                        </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/cards" className="link"  >
                                  <img src="./surface1.png" alt="" />
                                  <span>Cards</span>
                            
                              
                      </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/transactions" className="link" >
                                    <img src="./bill line.png" alt="" />
                              <span>Transaction</span>
                              
                        </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/market" className="link" >
                                  <img src="home.png" alt="" />
                                  <span>MarketPlace</span>
                       </NavLink>
                      </li>
                  <li className="nav-item">
                          <NavLink to="/settings" className="link" >
                              <img src="./vector.png" alt="" />
                              <span>Settings</span>
                         
                        </NavLink>
                       
                  </li>
              </ul>
              </div>
            
             
              <footer className="footer">
                  {/* <div> */}
                            
               <img src="./log.png" alt="" />    
              <span>Log Out</span>
                      {/* </div> */}
               
          </footer>
          </nav>
       

      </div>
  )
}

export default NavBar
//  className={({ isActive }) => (isActive ? 'link active' : 'link')}