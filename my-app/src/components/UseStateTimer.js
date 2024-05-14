import React, {useState, useEffect} from 'react'

function UseStateTimer() {

    const [timer, setTimer] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Timer')
            setTimer(time => time +1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    },[])




  return (
    <div>
        <h2>Timer: {timer}</h2>
    </div>
  )
}

export default UseStateTimer