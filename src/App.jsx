import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data,setData] = useState({holaMundo: ""});
  const getDataFromApi = async _=>{
    try{
      const res = await fetch("http://localhost:3000")
      const info = await res.json();
      setData(info)
    }catch{
      setData({holaMundo: "API ERROR 123"})
    }
  }
  useEffect(_=>{
    getDataFromApi();
  },[])
  return (
    <div className="App">
      {
        data.holaMundo
      }
    </div>
  )
}

export default App
