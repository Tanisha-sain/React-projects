import { useState } from 'react';

function App() {

  const [color, setColor] = useState(localStorage.getItem("color") || "gray");


  const changeColor = (color) => {
    setColor(color);
    localStorage.setItem("color", color);
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>

      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick = {() => changeColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "red"}}>
            Red
          </button>
          <button 
          onClick = {() => changeColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "green"}}>
            Green
          </button>
          <button 
          onClick = {() => changeColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "blue"}}>
            Blue
          </button>
          <button 
          onClick = {() => changeColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "black"}}>
            Black
          </button>
          <button 
          onClick = {() => changeColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "pink"}}>
            Pink
          </button>
          <button 
          onClick = {() => changeColor("skyblue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor : "skyblue"}}>
            SkyBlue
          </button>
          <button 
          onClick = {() => changeColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "olive"}}>
            Olive
          </button>
          <button 
          onClick = {() => changeColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "gray"}}>
            Gray
          </button>
          <button 
          onClick = {() => changeColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : "yellow"}}>
            Yellow
          </button>
          <button 
          onClick = {() => changeColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : "white"}}>
            White
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
