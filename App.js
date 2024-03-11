import React from "react";
import ReactDOM from "react-dom/client";

//In react while creating the element we always pass 3 argument (htmlTags , object , children) , where msg is the children . 2nd + 3rd argument is know as props
// const heading = React.createElement(
//     "h1",
//     {id: "heading"},                                                     //props
//     "Welcome to the world of React with the help of Akshay !!!!"        //props  and also children
//   );
//   console.log(heading)  //object
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);



/**
 *  <div id ="parent">
 *       <div id = "child">
 *           <h1> i am child </h1>
 *      </div>
 * </div>
 * 
 */ 


// const divparent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},
// React.createElement("h1", {},"i am child")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divparent);



/**
 *  <div id ="parent">
 *       <div id = "child">
 *           <h1> i am child </h1>
 *           <h2> i am child 2 </h2>
 *      </div>
 * </div>
 * 
 */ 


// const divparent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},
// [React.createElement("h1", {}, "i am child") , 
// React.createElement("h2", {}, "in am child 2")] ) );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divparent); 



/**
 *  <div id ="parent">
 *       <div id = "child">
 *           <h1> i am child </h1>
 *           <h2> i am child 2 </h2>
 *      </div>
 *      <div id = "child2">
 *           <h3> i am child 3 </h1>
 *           <h4> i am child 4 </h2>
 *      </div>
 * </div>
 * 
 */ 


const divparent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "i am father"),
React.createElement("h2", {}, "i am mother")]),
React.createElement("div", {id:"child2"},
[React.createElement("h3", {}, "i am child 3"),
React.createElement("h4", {}, "i am child 4")])])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divparent);