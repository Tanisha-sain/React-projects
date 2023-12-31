import { useState, useEffect } from 'react';
import Form from './Form';
import Body from './Body';
import Table from './Table';


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);  
      }catch(err){
        console.log(err.message);
      }
    }
    fetchItems();
  },[reqType])

  return (
    <>
      <Form 
        reqType={reqType} 
        setReqType={setReqType}
      />
      {/* <Body 
        items={items}
      /> */}
      <Table
        items={items}
      />
    </>
  )
}

export default App;
