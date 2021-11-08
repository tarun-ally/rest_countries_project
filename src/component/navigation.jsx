import React from 'react'
import{IoMoonOutline} from 'react-icons/io5'

import './country.css';
class NavBar extends React.Component {
    render() { 
        return (
            <div className="mainHeader"  style ={{    margin:'0 0 50px 0'}} >

<nav class="navbar navbar-light bg-white shadow-sm width='100%" style ={{ bg:'white'}} >
  <div class="container-fluid"   >
    <div className='navbarH3'>

    <h3 class="navbar-brand ">
           <b>Where in the world?</b>
           </h3>
    </div >
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
      <div className='darkMode'>

      <p class="btn btn-outline" type="text"><IoMoonOutline/>Dark Mode</p>
      </div>
    {/* </form> */}
  </div>
</nav>


       
            {/* <button className="darkmode">dark mode</button> */}
            </div>
            
            );
    }







}
 
export default NavBar;