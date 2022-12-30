
import { useState } from "react";

const Uselocalstorage =(key,defaultvalue) => {
    const[storedvalue, setstoredvalue] = useState(()=>{
      try{
           const value= localStorage.getItem(key);

          if (value) {
              return JSON.parse(value);
           }else{
                localStorage.setItem(key,JSON.stringify(defaultvalue));
            return defaultvalue;
            }

        } catch(error){
        return defaultvalue;
         }
     });

    const setvalue =newvalue => {
    try{
        localStorage.setItem(key ,JSON.stringify(newvalue));
    } catch (error) {
        console.log(error);
    }
      setstoredvalue(newvalue);
     };
      return[storedvalue,setvalue];
    };

    export default Uselocalstorage;


