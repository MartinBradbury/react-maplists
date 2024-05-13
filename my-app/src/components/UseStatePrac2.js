import React, {useState} from 'react'

function UseStatePrac2() {
    const [Nums, setNums] = useState([1, 2, 3, 4, 5]);
    const addNums = () => {
        setNums([...Nums, Nums.length +1])
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
        <button onClick={addNums}>Add Number</button>
        <button onClick={removeNums}>Remove Number</button>
        <ul>
            {Nums.map(Num => <li>{Num}</li>)}
        </ul>
    </div>
  )
}

export default UseStatePrac2