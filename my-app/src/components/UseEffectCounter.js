import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
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
    </div>
  )
}

export default UseEffectCounter