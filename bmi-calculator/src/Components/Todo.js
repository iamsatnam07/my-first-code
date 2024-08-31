import React from 'react'

const Todo = () => {

    const [item, setItem] = useState("");
    const [TodoList, setTodoList] = useState([]);

    const itemHandler = (e) => {
        setItem(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const itemData = {
            id: TodoList.length + 1,
            item: item
        }
        setTodoList([...TodoList, itemData]);
        setItem("");
    }
  return (
    <div>
        <input type='text' onChange={itemHandler} />
        <button onClick={submitHandler}>Add</button>
        <ul>
            {TodoList.map((el) => (
                <li key={el.id}>{el.item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
