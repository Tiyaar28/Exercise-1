// function App(){
//   return <h1>Hello world + Hi</h1>
// }

import Greetings from "./Salaan";

// export default App;

// function App() {

//   const password = "123"
//   return  <h1>{password === "1236" ? "Welcome" : "Go back"}</h1>
// }

// function App() {

//   return (
// <>
//   <h1>Mohamed</h1>
//   <span>1980</span>
//   {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem. */}

//   </>

//   )

// }

// function App() {

//   const students = ["Mohamed", "Hamdi", "Ali", "Maryan"]

//   return students.map(student => <h1>{student}</h1> )
// }

// function App() {

//   const password = '1234'
//   return (password === "1234" ? "Welcome" : "Go back")
// }

// function App () {

//   return (
//     <>

// <h1>Mohamed</h1>
// <h2>Ahmed Nor</h2>
// <span>Age 25</span>

// </>
//   )
// }

// function App() {

//   const students = ["Mohamed ", "Ali", "Faduma"]

//   return students.map(student => <p>{student}</p>)
// }

// import {Greeting,WelcomeMessage} from "./Greeting";
// function App() {

//   return   (
//   <>
//    <Greeting/>
//    <WelcomeMessage/>

//    </>
//    )
// }

// import UserCardComponent from "./Exer1";
// import { UserCardNamedComponent } from "./Exer1";

// function UserCard() {
//   return (
//     <>

//     <UserCardComponent/>
//     <UserCardNamedComponent/>

//     </>
//   )

// }

// export default UserCard;

// import Layout from "./Layout"

// function App () {

//   return (

// <>

//  <Layout/>

// </>

//   )
// }

// export default App;

// import Blog from "./Ex2"

// function App () {

//   return (

//     <>

//     <Blog/>

//     </>
//   )
// }

// export default App;

// import Salaan from "./Salaan";

// function App () {

//   const currentUser = "Fatima"
//   const role = "Admin"
//   return (

//     <>
//     <Salaan
//     currentUser={currentUser}
//      role={role}/>

//      <Salaan
//      currentUser={"Kalid"}
//      role={"Student"}/>

//      <Salaan
//      currentUser={"Leyla"}
//      role={"Supper Admin"}
//      age={20}/>

//     </>

//   )

// }

// export default App;

// import UserCard from "./Exer3";
// function App () {

//   const name = "Mohamed"
//   const email = "mohamed@gmail.com"

//   return (
//     <>

//     <UserCard
//     name={name}
//     email={email}/>

//     <UserCard
//     name={"Ahmed"}
//     email={"ahmed@gmail.com"}/>

//     <UserCard
//     name={"Muna"}
//     email={"muna@gmail.com"}/>
//     <UserCard
//     name={"Maria"}
//     email={"maria@gmail.com"}/>
//     </>
//   )
// }{

// function App() {

//   return(

//   <>
//    <div style={{color: "blue", fontSize: "20px", backgroundColor: "yellow"}}>Hello</div>
// <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"

// width="250px"
// />

// <p>{2+2}</p>
//   </>
//   )
// }

// export default App;

// import { useState } from "react";
// function App() {

//   const [isVisible, setIsVisible] = useState(false);

//   const toggle = () => {
//     setIsVisible (!isVisible)
//   }

//   return (
//     <>
//       <div>
//         <button onClick ={toggle}>{isVisible ? 'Hide' : 'Show'} Message</button>

//         {isVisible && <p>This is taggable message</p> }
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// function App() {

//   const [name, setName] = useState("")
//   const handleChange = (event) => {
//     setName(event.target.value)
//   }

//   return (
//     <>
//       <div>
//         <input type="text" onChange={handleChange} />

//         <p>Hello , {name}</p>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div>
        <p>The button is {!isOn ? "ON " : "OFF"}</p>
        <button onClick={toggle}>Turn {isOn ? "ON" : "OFF"}</button>
      </div>
    </>
  );
}

export default App;
