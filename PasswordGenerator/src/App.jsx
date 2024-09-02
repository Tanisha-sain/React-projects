import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers) str += "1234567890";
    if(specialChar) str += "!@#$%^&*()-_+={}[]~`";

    for(let i = 0; i<length; i++){
      let num = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(num);
    }
    setPassword(pass);

  }, [length, numbers, specialChar, setPassword])

  const copyPassword = useCallback(() => {

    passwordRef.current?.select();
    // passwordRef.current.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password);

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, specialChar, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 text-xl bg-gray-700'>
        
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className={`outline-none text-white px-3 py-0.5 shrink-0 ${
            isClicked ? 'bg-orange-400' : 'bg-orange-500'
          }`}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={8}
            max={50} 
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numbers}
            id='numberInput'
            onChange={() => {
              setNumbers((prev) => {
                return !prev;
              })
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={specialChar}
            id='charInput'
            onChange={() => {
              setSpecialChar((prev) => !prev)
              // setSpecialChar(!specialChar)
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
