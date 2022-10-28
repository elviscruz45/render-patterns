import React from 'react';
import { useTodos} from "./useTodos"
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import {TodoHeader} from "../TodoHeader"

function App(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue ,
    addTodo,
  } = useTodos();


  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos} 
            />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
      </TodoHeader>


      <TodoList
      error={error}
      searchValue={searchValue}
      loading={loading}
      searchedTodos={searchedTodos}
      onError={()=><TodosError/>}
      totalTodos={totalTodos}
      onLoading={()=><TodosLoading/>}
      onEmptyTodos={()=><EmptyTodos/>}
      onEmptySearchResults={
        (searchText)=><p>No se encontraron resultados para {searchText}</p>
      }
      render={todo=>(
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
      )}
      >
        {todo=>(
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {/* <TodoList> */}
        {/* {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))} */}
      {/* </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export {App} 











// return(
//   <TodoProvider>
//     <AppUI/>
//   </TodoProvider>
// )



// function App(){
//   const[state,setState]=React.useState('estado compartido')
//   return(
//   <React.Fragment>
//     <TodoHeader>
//       <TodoCounter/>
//       <TodoSearch/>
//     </TodoHeader>

//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//   </React.Fragment>)
// }


// function TodoHeader({children}){
//   return(<header>
//     {children}
//     </header>);
// }

// function TodoList({children}){
//   return(<section className="TodoList-container">
//     {children}
//     </section>);
// }

// function TodoCounter(){
//   return<p>TodoCounter</p>;
// }
// function TodoSearch(){
//   return<p>TodoSearch</p>;
// }

// function TodoItem({state}){
//   return<p>TodoItem:{state}</p>;
// }
// export default App;