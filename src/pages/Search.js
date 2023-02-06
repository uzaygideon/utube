import React,{useState} from 'react'

import { NavLayout } from '../NavLayout'
export const Search = () => {
    const[data,setData]=useState([]);
    // const[enter,setEnter]=useState('')

    
    // useEffect(()=>{
    //     fetchME()
    //     setEnter(enter)
    //   },[])
    //   const fetchME=()=>{
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': '56c66e532emsh1e23c1a8ab0846fp1b8c07jsnd868ba4dc941',
    //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //       }
    //     };
        
    //     fetch(`https://youtube-v31.p.rapidapi.com/search?q=${enter}&part=snippet%2Cid&regionCode=NG&maxResults=50&order=date`, options)
    //     .then(response =>{ 
    //       return response.json()
    //     })
    //     .then(data =>{
    //       setData(data.items)
         
    //     } )
    //     .catch(err => console.error(err));
    //   }
<NavLayout/>    
  return (
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
  )
}
