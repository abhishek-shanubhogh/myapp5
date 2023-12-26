import React,{useState,useEffect} from 'react'
import "./Customecss.css"

export default function Dummy() {

    const [value,setValue] =useState(1);

    
    


  return (
    <div className='App'>

        <button onClick={()=> {setValue(Math.floor(Math.random()*100))}}>Click to Change the value 👇👇</button>
        <UpdateValue id={value}/>

    </div>
  )
}

export function UpdateValue ({id})
{
    const [res,setRes] = useState("");
    useEffect(()=>{
        
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(x=>x.json())
        .then(y=>setRes(y.body) )
        
    },[id]);
    return (
        <div>
            <h1>
                
                <div className ='App'style={{border:"double"}}>{id}</div>
                <div className ='Custom' >{res} </div>
                </h1>
        </div>
    );
};