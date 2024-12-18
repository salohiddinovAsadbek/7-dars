import { useState } from "react";

function Todo() {
    const [input, setInput] = useState('');
    const [info, setInfo]=useState([])
    const addItem =()=>{
        setInfo([...info,input])
        setInput('')
    }
    return (
        <div>
            <div className="inputs">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e?.target?.value)} 
                    placeholder="Add new todo" 
                />
                <button onClick={addItem}>Add</button>
            </div>
            <div className="items">
                {
                     info?.map((e, index) => (
                         <div key={index}>{e}</div>
                     ))
                }
            </div>

        </div>
    );
}

export default Todo;
