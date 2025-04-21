import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassCompo from "./ClassCompo";

function App() {
  //function componet
  //  task2
  //  const [count,setCount] = useState(0);
  //  console.log(count);

  //   useEffect(() =>{
  //     setTimeout(() => {
  //        setCount(50)
  //     },2000)
  //     console.log(count);

  //   })

  return (
    <>
      {/* task 1
       Create a class component that fetches data from an API when the component
      mounts using componentDidMount(). Display the data in the component. */}
      <ClassCompo />
    </>
  );
}

export default App;
