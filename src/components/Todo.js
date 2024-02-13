
import React, { useState } from 'react';
import './todo.css'; 

function Todo() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData([...listData, activity]);
    setActivity('');
  };

  const removeActivity = (i) => {
    const updateListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updateListData);
  };

  const removeAllActivity = () => {
    setListData([]);
  };

  return (
    <>
      <div className="todo-header">TODO</div>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button  className="add" onClick={addActivity}>Add</button>
      </div>

      <h2>Here your list</h2>

      {listData.length > 0 &&
        listData.map((data, i) => (
          <div className="todo-item" key={i}>
            <div>{data}</div>
            <button onClick={() => removeActivity(i)}>Remove</button>
          </div>
        ))}

      {listData.length > 0 && (
        <button className="remove-all-btn" onClick={removeAllActivity}>
          Reset 
        </button>
      )}
    </>
  );
}

export default Todo;
