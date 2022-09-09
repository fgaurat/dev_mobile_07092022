
import Counter from './Counter';
import { Hello } from './Hello';
import TodoForm from './TodoForm';
import TodoList from './TodoList';





function App() {


  return (
    <div>
      {process.env.REACT_APP_TODOS_URL}
      <Hello fname="Fred" name="GAURAT" />
      <hr />
      <Counter />
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TodoForm></TodoForm>
          </div>
        </div>
          <div className="col">
            <TodoList></TodoList>
          </div>
      </div>
    </div>
  );
}

export default App;
