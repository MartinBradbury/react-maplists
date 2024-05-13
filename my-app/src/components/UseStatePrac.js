import React, {useState} from 'react'

function UseStatePrac() {

    const [Numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers([...Numbers, Numbers.length +1 ]);
    }

    const removeNumber = () => {
        setNumbers(
            Numbers.filter((item, idx) => {
                return idx !== Numbers.length -1
            })
        )
    }


  return (
    <div>
        <button onClick={addNumber}>Add Number</button>
        <button onClick={removeNumber}>Remove</button>
        <ul>
            {Numbers.map(Number => <li>{Number}</li>)}
        </ul>
    </div>
  )
}

export default UseStatePrac