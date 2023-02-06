import React, { useState,useEffect } from 'react'
import './NavLayout.css'
import { BsPlayFill,BsSearch } from 'react-icons/bs';
export const NavLayout = () => {
  const[enter,setEnter]=useState('')
  const[data,setData]=useState([])
  const[submit,setSubmit]=useState('')
  useEffect(()=>{
    fetchME()
  },[submit])
  const fetchME=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '56c66e532emsh1e23c1a8ab0846fp1b8c07jsnd868ba4dc941',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${enter}&part=snippet%2Cid&regionCode=NG`, options)
    .then(response =>{ 
      return response.json()
    })
    .then(data =>{
      setData(data.items)
     
    } )
    .catch(err => console.error(err));
  }

  const onChangeHandler=(e)=>{
    setEnter(e.target.value)
  }
  const onSubmitHandler=(e)=>{
    setSubmit(enter)
    
  }
  return (
    <>
    <nav>
<div className="nav-icon">
    <BsPlayFill className='fill'/>
</div>
  <form  className='view' onClick={onSubmitHandler}>
<input type="text" placeholder='Search..' maxLength={"30"} onChange={onChangeHandler} value={enter}/>
{/* <a href='/Search'> */}
<BsSearch className='save' onClick={onSubmitHandler} />
{/* </a> */}
</form>
    </nav>
    <div className="box">
     {data.map((dataMap,index)=>{
       return(
         <div>
            <a href={`https://www.youtube.com/watch?v=${dataMap.id.videoId}`}>
           <div className="yellow">
             <img src={dataMap.snippet.thumbnails.medium.url} alt=""key={index} className={'api-img'} />
         <p className={"p-link"}>{dataMap.snippet.title}</p>
         </div>
         </a>
         </div>
       )
     })}
     </div>    
  </>
  )
  
}
