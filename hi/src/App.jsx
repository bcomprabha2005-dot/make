import {useState} from"react";




/*function App(){
  return (
  <Table
  name="Prabha"
  age="20"
  course="react "
  />*/

  function App(){
    const[count,setcount]=useState(0);
    return(
      <div>
        <h1>{count}</h1>

        <button
        onClick={()=>setcount(count+1)}
        >
          Increment
        </button>
        <button  
        onClick={()=>setcount(count-1)}
        >
          Decrement
        </button>
      </div>
    );
  }
  


export default App