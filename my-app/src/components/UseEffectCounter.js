import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(time => time +1)
        }, 1000);
    },[])
    // const click = () => {
    //     setCount(count => count + 1)
    // };
    //YOU CAN RUN THIS FUNCTION DIRECTLY ON THE BUTTON LIKE BELOW//

  return (
    <div>
        <button onClick={() => {
            setCount(count => count +1)
        }}>
            this is the count: {count}</button>
        
        <h2>Timer: {timer}</h2>
    </div>
  )
}

export default UseEffectCounter