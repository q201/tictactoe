import { useState,useEffect} from "react";

function Square(props) {
    const [store,setStore]=useState('');

    useEffect(() => {
      if (props.x==0) {
        setStore('');
      }
       
    }, [props.x]);
       
     
       function handle()
         {  
         
          
           if(store==='')
           {
              
                setStore(props.z[props.x]);
                
           props.y(props.id,props.z[props.x]);
         }
        }
 
   return <button onClick={handle} className="square">{store}</button>
    
  }

 export default Square;