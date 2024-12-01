import { useState,useEffect } from "react";

function CurrentTimeDate() {

  const [timeDate, setTimeDate] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTimeDate(new Date());
    },1000)
    return ()=>{
      clearInterval(intervalId);
    }
  },[])


// Initialize a timeDate state with the current date and time.
// Set up an interval timer to update the timeDate state every second.
// Cleanup the interval timer when the component is unmounted to avoid memory leaks.

  return (
    <p className="lead">
      Current Time : {timeDate.toLocaleTimeString()}
       <br />
      Current Date : {timeDate.toLocaleDateString()}
    </p>
  );
}

export default CurrentTimeDate;
