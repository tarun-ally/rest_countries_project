import React from 'react'
import{IoMoonOutline} from 'react-icons/io5'
class NavBar extends React.Component {
    render() { 
        return (


            
            <div className="mainHeader"  style ={{    margin:'0 0 50px 0'}} >

<nav class="navbar navbar-light bg-white shadow-sm width='100%" >
  <div class="container-fluid" >
    {/* <a class="navbar-brand">Navbar</a> */}
    {/* <form class="d-flex"> */}
    <h3 class="navbar-brand">
           Where in the world?
           </h3>
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline" type="submit"><IoMoonOutline/>Dark Mode</button>
    {/* </form> */}
  </div>
</nav>


       
            {/* <button className="darkmode">dark mode</button> */}
            </div>
            
            );
    }







}
 
export default NavBar;