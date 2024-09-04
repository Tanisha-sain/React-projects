import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Tanisha-sain')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl py-4'>Github followers : {data.followers}
    <img className='mx-auto' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Tanisha-sain');
    const data = response.json();
    return data;
}