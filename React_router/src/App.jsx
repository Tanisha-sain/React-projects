import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={
          <Home/>
        }>
        </Route>
        <Route exact path="/post" element={
          <NewPost/>
        }>
        </Route>
        <Route exact
          path="/post/:id"
          element={
            <PostPage/>
          }
        >
        </Route>      
        <Route path='/post' element={<About />}/>
        <Route path='/post' element={<Missing />}/>   
      </Routes>
      <Footer />
    </>
  )
}

export default App;
