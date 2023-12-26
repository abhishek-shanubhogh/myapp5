import { useEffect,useState} from "react";

export const ApiJson = () =>
{

    const [result,setResult] =useState("");
    const [id,setId]=useState(0);
      useEffect(()=>{
        const cnt = new AbortController();
        fetch(`https://dummyjson.com/posts/${id}`,{signal:cnt.signal,})
        .then(x=> x.json())
        .then(y=> setResult(y.body));
        return ()=>cnt.abort();
      },[id]);

      const idChange =(e) =>
      {
        setId(e.target.value);
      };
      

    return (
        <div>
            <p><input type='number' onBlur={idChange} placeholder={id}></input></p>
            <><button onClick={()=> setId(Math.floor(Math.random()*100))}> Click Me </button></>
            <p>{id}</p>
            <h1>{result}</h1>
        </div>
    );


};
export default ApiJson;