import React from 'react'
import { useEffect,useState } from 'react'
export const Education = () => {
  const[data,setData]=useState([])

  useEffect(()=>{
    fetchME()
  },[])
  const fetchME=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '56c66e532emsh1e23c1a8ab0846fp1b8c07jsnd868ba4dc941',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch('https://youtube-v31.p.rapidapi.com/search?q=eduation%20%20videos&part=snippet%2Cid&regionCode=US&maxResults=50', options)
    .then(response =>{ 
      return response.json()
    })
    .then(data =>{
      setData(data.items)
     
    } )
    .catch(err => console.error(err));
  }
  return (
    < >
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
