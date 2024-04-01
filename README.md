# namaste-react

//In react while creating the element we always pass 3 argument (htmlTags , object , children) , where msg is the children . 2nd + 3rd argument is know as props
// const heading = React.createElement(
// "h1",
// {id: "heading"}, //props
// "Welcome to the world of React with the help of Akshay !!!!" //props and also children
// );
// console.log(heading) //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/\*\*

- <div id ="parent">
-       <div id = "child">
-           <h1> i am child </h1>
-      </div>
- </div>
- \*/

// const divparent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},
// React.createElement("h1", {},"i am child")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divparent);

/\*\*

- <div id ="parent">
-       <div id = "child">
-           <h1> i am child </h1>
-           <h2> i am child 2 </h2>
-      </div>
- </div>
- \*/

// const divparent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},
// [React.createElement("h1", {}, "i am child") ,
// React.createElement("h2", {}, "in am child 2")] ) );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divparent);

/\*\*

- <div id ="parent">
-       <div id = "child">
-           <h1> i am child </h1>
-           <h2> i am child 2 </h2>
-      </div>
-      <div id = "child2">
-           <h3> i am child 3 </h1>
-           <h4> i am child 4 </h2>
-      </div>
- </div>
- \*/

// const divparent = React.createElement("div", {id: "parent"},
// [React.createElement("div", {id: "child"},
// [React.createElement("h1", {}, "i am father"),
// React.createElement("h2", {}, "i am mother")]),
// React.createElement("div", {id:"child2"},
// [React.createElement("h3", {}, "i am child 3"),
// React.createElement("h4", {}, "i am child 4")])])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divparent);

//React element JSX
// const heading = <h1 id = "heading">i am using jsx!!!!!</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//functional Component

// const Heading = () => <h1>i am using functional Component!!!</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading/>)

//component composition

// const Heading = () => <h1>i am using functional Component!!!</h1>;
// const heading= (<h1>hi gulafshan</h1>);

// const HeadingComponent =()=>(
// <div id =" title">
// <Heading/>
// <Heading></Heading>
// {Heading()}
// {heading}
// <h1>i am using composition component!!!</h1>
// </div>);

# Food App

/\*\*

- Header
- - Logo
- - Nav-item
- Body
- - Search
- - Resturant Card Container
- - Restutant Card
-      - image
-      - Resturant name
-      - Cuisine
-      - Rating
-      - Time
- Footer
- - About
- -Links
- - Contact us
- - Copy right
    \*/

# useState variable

const [reslist , setreslist] = useState(); //array destrcture
useState() returns an array

const arr = useState();
const [reslist , setreslist] = arr;

or
const arr = useState();
const reslist = arr[0];
const setreslist = arr[1];

so we pass second argument in an array because when ever second argument is called then re-render in the component take place,
also we can say that when second argument is called then diff algorithm(difference between old virtual dom and new virtual dom) comes in action and when difference is calculated then re-render take place in the component.

Why React is fast?

- it has Virtual Dom
- it does efficient Dom Manupilation
- it has React Fiber also know as Reconsiliation
- Diff Algorithm(difference between old and virtual dom)
