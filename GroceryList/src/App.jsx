import { useState, useEffect } from 'react';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }catch (err){
        setFetchError(err.message);
      }finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();     
    }, 2000);
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter(item => item.id === id);
    const updateOptions = {
      method : 'PATCH',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({ checked : myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => (item.id !== id));
    setItems(listItems);

    const deleteOption = {
      method : 'DELETE'
    } 
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return ;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <>
      <Header title={ "Groceries List" }/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p style={{ textAlign: 'center', fontSize : '25px' }}>Loading items...</p>}
        {fetchError && <p style={{ color : 'red', textAlign: 'center', fontSize : '25px' }}>{`Error : ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />}
      </main>
      <Footer length={items.length}/>
    </>
  )
}

export default App;