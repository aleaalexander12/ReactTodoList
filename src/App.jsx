import Todo from "./components/Todo";
import initialState from "./data/data";
import { useReducer } from "react";


// Reducer
function todosReducer(state, action) {
  //....
}



function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  // console.log(todos);
  
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add todo" />
      <button>Add</button>
      
      {todos.map(t => <Todo {...t} key={t.id} />)}
    </>
  );
}

export default App;
