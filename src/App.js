import React from 'react'
import { Layout } from './pages/Layout';
import {New} from'./pages/New'
import {Business} from'./pages/Business'
import {Coding} from'./pages/Coding'
import {Comedy} from'./pages/Comedy'
import {Movies} from'./pages/Movies'
import {Education} from'./pages/Education'
import {Food} from'./pages/Food'
import {Gaming} from'./pages/Gaming'
import {Music} from'./pages/Music'
import {Politics} from'./pages/Politics'
import {Sports} from'./pages/Sports'
import {NoPage} from'./pages/NoPage'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NavLayout } from './NavLayout';
import { Search } from './pages/Search';

function App() {
  return (
    <>
    <NavLayout/>
<BrowserRouter>
<Routes>
  <Route path='' element={<Layout/>}>
  <Route path='business' element={<Business/>}/>
  <Route path='Coding' element={<Coding/>}/>
  <Route path='Comedy' element={<Comedy/>}/>
  <Route path='education' element={<Education/>}/>
  <Route path='gaming' element={<Gaming/>}/>
  <Route path='music' element={<Music/>}/>
  <Route path='movies' element={<Movies/>}/>
  <Route path='' index element={<New/>}/>
  <Route path='fashion' element={<Food/>}/>
  <Route path='politics' element={<Politics/>}/>
  <Route path='Sports' element={<Sports/>}/>
  <Route path='*' element={<NoPage/>}/>
  </Route>
  <Route path='search' element={<Search/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
