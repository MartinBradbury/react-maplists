import React, {useState, useEffect} from 'react'
import UseStateTimer from './UseStateTimer';

function UseEffectCounter() {
    
    const [count, setCount] = useState(0);
    // const [timer, setTimer] = useState(0);
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        document.title = count;
    }, [count]);

    const displayClick = () => {
        setDisplay(!display)
    }


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer(time => time +1)
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[])
    // const click = () => {
    //     setCount(count => count + 1)
    // };
    //YOU CAN RUN THIS FUNCTION DIRECTLY ON THE BUTTON LIKE BELOW//

  return (
    <div>
        <button onClick={displayClick}>Toggle Timer</button>
        {display && <UseStateTimer />}
        <button onClick={() => {
            setCount(count => count +1)
        }}>
            this is the count: {count}</button>
        
        {/* <h2>Timer: {timer}</h2> */}
    </div>
  )
}

export default UseEffectCounter