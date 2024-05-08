import React, {useState} from 'react'

function ControlledFormHooks() {
    const[name, setName] = useState('');
    const[category, setCategory] = useState('Website');
    const[comments, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

return (
    <div>
        <h2>Please Fill Out the Form Below</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id-name">Your Name:</label>
                <input
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    } 
                    id="id-name" name="name" 
                    type="text"/>
            </div>
            <div>
                <select 
                    htmlFor="id-category" 
                    name="category"
                    value={category}
                    onChange={
                        (e) => setCategory(e.target.value)
                    }
                >
                    <option value="Website">Website Issue</option>
                    <option value="Order">Order Issue</option>
                    <option value="General">General Issue</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea 
                    id="id-comments" 
                    name="comments" 
                    value={comments} 
                    onChange={
                        (e) => setComment(e.target.value)
                    }
                />
            </div>

            <input type="submit" value="submit"></input>
        </form>
    </div>
    )
}

export default ControlledFormHooks