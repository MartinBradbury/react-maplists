import React, {useState} from 'react'

function UseStateWithObs() {
    const [Name, setName] = useState({firstName: "", lastName: ""})








  return (
    <div>
        <form>
            <input
                type="text"
                value={Name.firstName}
                onChange={e => setName({
                    ...Name,
                    firstName: e.target.value
                })}
                />
            <input
                type="text"
                value={Name.lastName}
                onChange={e => setName({
                    ...Name,
                    lastName: e.target.value
                })}
                />
            
            
            
            
            
            
            
        <h2>{JSON.stringify(Name)}</h2>
        </form>

    </div>
  )
}

export default UseStateWithObs