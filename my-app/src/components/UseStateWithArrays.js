import React, {useState} from 'react'

function UseStateWithArrays() {
    const [Nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        setNums([...Nums, Nums.length + 1]);
    }
    const removeNums = () => {
        setNums(
            Nums.filter((item, idx) => {
                return idx !== Nums.length -1
            })
        )
    }
  return (
    <div>
        <button onClick={addNums}>
            Click to add
        </button>
        <button onClick={removeNums}>
            Remove number
        </button>
        <ul>
            {Nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays