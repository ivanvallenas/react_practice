import './App.css';
import React from 'react';



const defaultTodos = [
  {text:'Cortar cebolla', completed:true},{text:'Cortar cebolla', completed:false},{text:'Cortar cebolla', completed:false},{text:"Pollll", completed:false}
]

function App() {
  return (
    <React.Fragment>
        <section className='container'>
          <TodoCounter completed={16} total={25} />
          <TodoSearch/>
          </section>

        <section className='container'>
        <TodoList>
          {defaultTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
        </TodoList>
        </section>

        <CreateTodoButton/>


    </React.Fragment>
  );
}

function TodoItem({text,completed}){
  return(
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      <span className={`Icon Icon-delete`}>X</span>
    </li>
  )
}

function TodoSearch(){
  return(
    <input className='TodoSearch' placeholder='Cortar Cebolla'
    onChange={(event)=>{console.log(event.target.value)}}
    />
  )
}

function TodoList(props){
  return(
    <ul className='TodoList'>
      {props.children}
    </ul>
  )
}

function CreateTodoButton(){
  return(
    <button className='CreateTodoButton'
    onClick={()=> {console.log("Diste click para agregar tarea")}}
    >+</button>
  )
}

function TodoCounter({total,completed}){
  return(
  <h1 className='TodoCounter'>
    Has completado <span>{completed}</span> de <span>{total}</span>pasos
  </h1>
  )
}



export {App}
