import React, { Component } from 'react'
class NavBar extends React.Component {
    render() { 
        return (
            <div className="mainHeader" style ={{    display:'flex',
            justifyContent:'space-around', backgroundColor:'blue',width:'100%',margin:'40px 0 50px 0'}} >

        <nav>
        
         <h3>
           Where in the world?
           </h3>
            </nav>
            <button className="darkmode">dark mode</button>
            </div>
            
            );
    }







}
 
export default NavBar;