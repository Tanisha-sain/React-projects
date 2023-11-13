import { useState } from 'react';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "item 1"
    },
    {
      id: 2,
      checked: false,
      item: "item 2"
    }
  ])

  return (
    <>
      <Header title={ "Groceries List" }/>
      <SearchItem />
      <Content 
        items={items}
        setItems={setItems}
      />
      <Footer />
    </>
  )
}

export default App;
