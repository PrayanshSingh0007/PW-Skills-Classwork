import { useEffect, useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [isValid, setIsValid] = useState(false)

//   return (
//     <div>
//       <h1>{isValid ? count: "You are Invalid"}</h1>
//       <button onClick={() => setCount(count + 1)}>
//       Increment
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//       Decrement
//       </button>
//       <button onClick={() => setIsValid(!isValid)}>
//       Toggle
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [theme, setTheme] = useState('light')
//   function handletheme () {
//      if (theme === 'light') {
//        setTheme('dark')
//      } else {
//        setTheme('light')
//      }
//   }

//   function fun (){
//     return (
//       <div>
//         <h1>Theme changed</h1>
//       </div>
//     )
//   }
//   useEffect(() => {
//     fun()
//   }, [theme])

//   return (
//     <div 
//     className="App"
//     style={{backgroundColor: theme === "light" ? "#ffffff" : "#000000"}}>
//     <button onClick={handletheme}> Theme Change</button>
//     </div>
// }

// export default App

// sir code 

function App() {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);
  function handleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  function handleCounter() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    var interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    console.log(counter);
    return () => {
      clearInterval(interval);
      console.log("Unmounting & clear up function");
    };
  }, [theme, counter]);

  return (
    <div
      className="App"
      // style={{ backgroundColor: theme == "light" ? "#ffffff" : "#000000" }}
    >
      <h1>{counter}</h1>
      <button onClick={handleTheme}>Theme Change</button>
      <button onClick={handleCounter}>Counter</button>
    </div>
  );
}

export default App;