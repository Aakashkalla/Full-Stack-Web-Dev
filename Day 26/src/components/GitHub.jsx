import React, { useEffect, useState } from 'react'

const GitHub = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Aakashkalla')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    })
  return (
    <div className='text-2xl bg-slate-700 text-white text-center'>
      GitHub Followers: {data.followers}
      <img src='{data.avatar_url}' alt='Github Profile'/>
    </div>
  )
}

export default GitHub
