import React from 'react'
import { useState } from 'react';
import { Outlet ,Link} from 'react-router-dom'
import './Layout.css'
import{AiFillHome,AiFillCode} from 'react-icons/ai';
import{BiMoviePlay} from 'react-icons/bi';
 import{BsMusicNote} from 'react-icons/bs'
import {MdBusiness,MdTheaterComedy,MdCastForEducation,MdShop,MdOutlineGames,MdPolicy,MdOutlineSports}  from 'react-icons/md'
export const Layout = () => {
  const[active,setActive]=useState("/")
  return (
    <>
    <div className='layout-container'>
    <Link  to="/" id='link-1' onClick={()=>setActive('/')} className={active==='/'?'link-1':'link-2'}>
     <AiFillHome className='Af'/> 
      New</Link>
    <Link to="/Business" id='link-1' onClick={()=>setActive('/Business')} className={active==='/Business'?'link-1':'link-2'}>
      <MdBusiness className='Af'/>
      Business</Link>
    <Link to="/Coding"id='link-1' onClick={()=>setActive('/Coding')} className={active==='/Coding'?'link-1':'link-2'}>
    <AiFillCode className='Af'/>
    Coding</Link>
    <Link to="/Comedy"id='link-1' onClick={()=>setActive('/Comedy')} className={active==='/Comedy'?'link-1':'link-2'}>
         <MdTheaterComedy className='Af'/>
         Comedy</Link>
    <Link to="/Education"id='link-1' onClick={()=>setActive('/Education')} className={active==='/Education'?'link-1':'link-2'}> 
         <MdCastForEducation className='Af'/>
      Education</Link>
    <Link to="/Fashion" id='link-1' onClick={()=>setActive('/Fashion')} className={active==='/Fashion'?'link-1':'link-2'}>
         <MdShop className='Af'/>
      Food</Link>
    <Link to="/Gaming" id='link-1' onClick={()=>setActive('/Gaming')} className={active==='/Gaming'?'link-1':'link-2'}>
         <MdOutlineGames className='Af'/>
      Gaming</Link>
    <Link to="/Music" id='link-1' onClick={()=>setActive('/Music')} className={active==='/Music'?'link-1':'link-2'}>
         <BsMusicNote className='Af'/>
      Music</Link>
    <Link to="/Movies" id='link-1' onClick={()=>setActive('/Movies')} className={active==='/Movies'?'link-1':'link-2'}>
         <BiMoviePlay className='Af'/>
      Movies</Link>
    <Link to="/Politics" id='link-1' onClick={()=>setActive('/Politics')} className={active==='/Politics'?'link-1':'link-2'}> 
         <MdPolicy className='Af'/>
      Politics</Link>
    <Link to="/Sports"id='link-1' onClick={()=>setActive('/Sports')} className={active==='/Sports'?'link-1':'link-2'}> 
         <MdOutlineSports className='Af'/>
      Sports</Link>
    </div>
    <Outlet/>
    </>
  )
}
