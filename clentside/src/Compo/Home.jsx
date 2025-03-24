import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Header from './Head';
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";
function Home() {
  const [todolist, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/todos') 
      .then((result) => {
        console.log(result.data);
        setTodos(result.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
 const handledone= (id) =>{
    axios.put(`http://localhost:3001/update/${id}`)
    .then((result)=>{alert("updated the task status"+result.data.task)
        location.reload();
    })
    .catch((err)=>{alert("failed to update task status"+err)});
 }
 const handletrash=(id)=>{
 axios.delete(`http://localhost:3001/remove/${id}`)
 .then((result)=>{alert("deleted the task status"+result.data.task)
    location.reload();
 })
    .catch((err)=>{alert("failed to delete task status"+err)});
 }
  return (
    <div className="home">
      <Header />
      <div className="todo-container">
        {todolist.length === 0 ? (
          <div className="empty-message">
            <h3>Empty! No Records</h3>
          </div>
        ) : (
          <ul className="todo-list">
            {todolist.map((todo, index) => (
              <li key={index} className="todo-item"> 
                     <BsCircleFill
                  className={`done-icon ${todo.done ? "completed" : ""}`} 
                  onClick={() => handledone(todo._id)}
                />
                     <span className={`taskdisplay ${todo.done ? "done" : " "}`}> {todo.task}</span>
                     <BsFillTrashFill className="delete-icon"  onClick={()=>handletrash(todo._id)} />

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
