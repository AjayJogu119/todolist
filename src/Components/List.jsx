import React, { useState } from 'react'

const List = () => {
    const [todolist, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <div className="container">
        <input type="text" value={inputValue} placeholder='Enter your list.....' onChange={(e)=>{
            setInputValue(e.target.value);
        }}/>
        <button onClick={() =>{
            if (inputValue) {
                setToDoList([...todolist, inputValue]); // Append new item to todolist array
                setInputValue(''); // Clear input field
            } 
        }}>submit</button>
        <div>
            {
                todolist.map((item,index)=>{
                    return(
                        <div className='list-container' key={index}>
                            <p>{item}</p>
                            <button onClick={()=>{
                               const updatedList = todolist.filter((item,idx)=>idx!==index);
                               setToDoList(updatedList);
                            }}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default List
