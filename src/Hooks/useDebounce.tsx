import { useEffect, useState } from "react";

function useDebounce(value:string, delay:number) {
const [debouncedValue,setDeboucedValue]=useState(value);
useEffect(()=>{
    const Timer=setTimeout(()=>{
        setDeboucedValue(value);
    },delay);
    return()=>{
        clearTimeout(Timer);
    }
},[value,delay])
return debouncedValue;
}
export default useDebounce;