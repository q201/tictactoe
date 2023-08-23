import { useState,useEffect } from "react";
import Square from "./Square";
 

export default function App() {
   const [count,setCount]=useState(0);
   const [wincheck,setWincheck]=useState(0);
   const [win,setWin]=useState('');
   const arr=['X','O','X','O','X','O','X','O','X',''];
   const [winner,setWinner]=useState(['','','','','','','','','']);
    var x=0;
   function rst() {
    setCount(0);
    setWincheck(0);
    setWinner(['','','','','','','','','','']);
   }
   

   useEffect(() => {
    if (count>=5) {
      
      for(var i=0; i<=6; i=i+3)
       if(winner[i]===winner[i+1] && winner[i]===winner[i+2] && winner[i]!=='')
         { setWin(winner[i]);
          setWincheck(1);
          break;
        }

        for(var i=0; i<=2; i=i+1)
          if(winner[i]===winner[i+3] && winner[i]===winner[i+6] && winner[i]!=='')
            { setWin(winner[i]);
              setWincheck(1);
              break;
            }

      if(winner[0]===winner[4] && winner[0]===winner[8]&& winner[0]!=='')    
        {setWin(winner[0]);
        setWincheck(1);}
      else if(winner[2]===winner[4] && winner[2]===winner[6]&& winner[2]!=='')
        {setWin(winner[2]); setWincheck(1);}
         
    }
     
  }, [count]);

    function handlecount(p1,p2)
    {
      const updatedItems = [...winner];
      updatedItems.splice(p1,1,p2);
      console.log("Box no: "+p1+"value "+arr[count]);
      setWinner(updatedItems);
      setCount(count+1);
    }
    
  

return(
<div className="wrapper">
<button  className="item btn" onClick={rst}>Reset</button>
<div className='board item'>
    <div className="board-row">
    <Square id={0} x={count} y={handlecount} z={arr}/>
     
    <Square id={1} x={count} y={handlecount} z={arr} />
    <Square id={2} x={count} y={handlecount} z={arr} />
    </div>
    <div className="board-row">
    <Square id={3} x={count} y={handlecount} z={arr} />
    <Square id={4} x={count} y={handlecount} z={arr} />
    <Square id={5} x={count} y={handlecount} z={arr} />
    </div>
    <div className="board-row">
    <Square id={6} x={count} y={handlecount} z={arr} />
    <Square id={7} x={count} y={handlecount} z={arr} />
    <Square id={8} x={count} y={handlecount} z={arr} />
    </div>
    <div>
      
    </div>
</div>

<div className="item">
  <h3>
    {count!=9?<h3>{arr[count]} turn</h3>:'' }
    <br />
    {wincheck==1?<h3>Winnner: {win}</h3>:"" }
    {wincheck==0 && count==9?<h3>Match draw</h3>:""}
  </h3>
</div>
</div>
);
}
