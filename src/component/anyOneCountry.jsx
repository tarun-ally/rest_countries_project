
// import React, { useEffect,useState } from "react";


// function OneCountry(){
//   const[item,setItem] = useState({});

//   const fetchItem =async () =>{

//     const data = await fetch('`https://restcountries.com/v2/alpha/${}');
  
//     console.log(data,'kiara');
//   const item =  await data.json();
  
// }
// }


// class OneCountry extends React.Component {



//   // const fetchItem = async()=>{
    


//   // }
//   render() {
//     console.log( this.props.singleContent.items[this.props.singleContent.indexForCountry]
//       .borders,'hulk')
//     if (
//       this.props.singleContent.items[this.props.singleContent.indexForCountry]
//         .borders !== "undefined" 
//         // &&
//       // this.props.singleContent.items[this.props.singleContent.indexForCountry]
//       //   .borders !== ""
//     ) 
//     {
//       return (
//         <div>
//           <div>
//             <button>Back</button>
//           </div>
//           <div>
//             <img
//               src={`${this.props.singleContent.items[0].flags.svg}`}
//               alt=""
//               width="30%"
//             />
//           </div>
//           hello
//           {console.log(this.props.singleContent.items[0].population)}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               backgroundColor: "white",
//             }}
//           >
//             <div>
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].name
//               }
//             </div>
//             {console.log(this.props.singleContent.indexForCountry, "luck")}
//             <p>
//               Native Name:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].nativeName
//               }
//             </p>
//             <p>
//               {" "}
//               Population:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].population
//               }
//             </p>
//             <p>
//               Region:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].region
//               }
//             </p>
//             <p>
//               Sub Region:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].subregion
//               }
//             </p>
//             <p>
//               Capital:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].capital
//               }
//             </p>
//             <p>
//               Top Level Domain:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].topLevelDomain
//               }
//             </p>
//             <p>
//               Currencies:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].currencies[0].name
//               }{" "}
//             </p>
//             <p>
//               Languages:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].languages[0].name
//               }
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "50%",
//                 backgroundColor: "red"
//                 //    flexDirection:'column'
//               }}
//             >
//               {this.props.singleContent.items[
//                 this.props.singleContent.indexForCountry
//               ].borders.map((borderCountry) => {
//                 if (borderCountry) {
//                   // console.log(borderCountry, "namee");
//                   return (
//                     <div
//                       style={{
//                         display: "flex",
//                         width: "10%",
//                         backgroundColor: "green",
//                         justifyContent: "space-between",
//                         //    flexDirection:'column'
//                       }}
//                     >
//                       <p> {borderCountry}</p>
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <div>
//             <button>Back</button>
//           </div>
//           <div>
//             <img
//               src={`${this.props.singleContent.items[0].flags.svg}`}
//               alt=""
//               width="30%"
//             />
//           </div>
//           hello
//           {console.log(this.props.singleContent.items[0].population)}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               backgroundColor: "white",
//             }}
//           >
//             <div>
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].name
//               }
//             </div>
//             {console.log(this.props.singleContent.indexForCountry, "luck")}
//             <p>
//               Native Name:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].nativeName
//               }
//             </p>
//             <p>
//               {" "}
//               Population:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].population
//               }
//             </p>
//             <p>
//               Region:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].region
//               }
//             </p>
//             <p>
//               Sub Region:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].subregion
//               }
//             </p>
//             <p>
//               Capital:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].capital
//               }
//             </p>
//             <p>
//               Top Level Domain:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].topLevelDomain
//               }
//             </p>
//             <p>
//               Currencies:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].currencies[0].name
//               }{" "}
//             </p>
//             <p>
//               Languages:{" "}
//               {
//                 this.props.singleContent.items[
//                   this.props.singleContent.indexForCountry
//                 ].languages[0].name
//               }
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "50%",
//                 backgroundColor: "red",
//                 //    flexDirection:'column'
//               }}
//             >
//               {/* {this.props.singleContent.items[
//                 this.props.singleContent.indexForCountry
//               ].borders.map((borderCountry) => {
//                 if (borderCountry) {
//                   console.log(borderCountry, "namee");
//                   return (
//                     <div
//                       style={{
//                         display: "flex",
//                         width: "10%",
//                         backgroundColor: "green",
//                         justifyContent: "space-between",
//                         //    flexDirection:'column'
//                       }}
//                     >
//                       <p> {borderCountry}</p>
//                     </div>
//                   );
//                 }
//               })} */}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default OneCountry;

import React, { Component } from 'react'

import{withRouter} from 'react-router-dom';

class OneCountry extends React.Component {


   fetchItem =async () =>{

    fetch(`https://restcountries.com/v2/all/`)
    .then((res)=> res.json())
    .then((json)=>{
      
      console.log(json,'kiara');
    })

  
  const item =  await data.json();
  
}
  render() { 
    return <div>
      {this.props.match.params.id}
    </div>;
  }
}
 
export default withRouter(OneCountry) ;
