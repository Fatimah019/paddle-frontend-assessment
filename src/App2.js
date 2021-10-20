import React from "react";

// const App = () => {
//   const [v, setV] = React.useState(1);

//   React.useEffect(() => {
//     setTimeout(async () => {
//       await setV(2);
//       doSomethingWithData(v);
//     }, 3000);
//   });  nbxmjvbfj

//   return (
//     <div>
//       <h1>Hello, world {v}!</h1>
//     </div>
//   );
// };

// const doSomethingWithData = (v) => {
//   //report e-commerce data to our server here..
//   console.log("Variable value is: " + v);
// };

// This is referred to as being anti-pattern,
// it is an anti-pattern to copy properties that never chnages to the state. Th eprops can be accessed directly in that case
//

// Using props to generate state in the getInitialState often leads to duplicatio of source of truth
// that is, where the real data is. This is because getInitaialstate is only invoked when the component is first created.
//

// class SubApp extends React.Component {
//   render() {
//     return <h1>{this.props.name}</h1>;
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.name || "initial",
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       name: "hello",
//     });
//   }

//   render() {
//     console.log(this.props);
//     return <SubApp name={this.state.name} />;
//     // return <p name={"hi"}>Hello {this.state.name}</p>;
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.name = "MyComponent";

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);

  render() {
    return (
      <div>
        {/* first button gets called, it allocated a separate memory for the handleClick1 function and it is invoked everytime the component is rendered. it creates a new function instance on each render  */}
        <button onClick={this.handleClick1()}>click 1</button>;
        {/* the second button returns an error  */}
        <button onClick={this.handleClick1}>click 2</button>
        {/* in button 3, for every function bind, there is a new instance created and this is what is used  */}
        {/* a copy, handleClick2 of the function handleClick1 with the switched context is returned  */}
        <button onClick={this.handleClick2}>click 3</button>
        {/*  button 4 passes a reference to an instance of the handleClick3 function which is an arror function and an arrow function in a clas bases component doesnt need to be binded because it ishandles the this context in a lexical way */}
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}

// const App = () => {
//   const arr = ["A", "B", "C"];

//   const handleShift = (index) => {
//     arr.push(arr.shift(index));
//     console.log(arr);
//   };

//   return (
//     <ul>
//       {arr.map((list, index) => {
//         return (
//           <li key={index} onClick={() => handleShift(index)}>
//             {list}
//           </li>
//         );
//       })}

//       {arr}
//     </ul>
//   );
// };

// const App = () => {
//   const [buttonText, setButtonText] = useState("");

//   const handleShowBtnText = (btn) => {
//     setButtonText(btn);
//   };

//   return (
//     <>
//       <button
//         value="First Button"
//         onClick={(e) => handleShowBtnText(e.target.value)}
//       >
//         First Button
//       </button>

//       <button
//         value="Second Button"
//         onClick={(e) => handleShowBtnText(e.target.value)}
//       >
//         Second Button
//       </button>

//       <div>{buttonText}</div>
//     </>
//   );
// };

export default App;
// class App extends React.Component {
//   state = {
//     text: ''
//   }

//   onDocumentClick = (event) => {
//     if (event.target.tagName === 'BUTTON') {
//       this.setState({ text: event.target.textContent })
//     }
//   }

//   componentDidMount() {
//     document.addEventListener('click', this.onDocumentClick)
//   }
//   componentWillUnmount() {
//     document.removeEventListener('click', this.onDocumentClick)
//   }

//   render() {
//     return <div>
//       {this.props.children}
//       <Tooltip text={this.state.text}/>
//     </div>
//   }
// }

// document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App>
//   <button id="button1">First button</button>
//   <button id="button2">Second button</button>
// </Tooltip>, rootElement);
// document.getElementById("button2").click();
// setTimeout(() => console.log(document.body.innerHTML));
