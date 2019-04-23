
import React, { Component } from 'react';


import './App.css';

class App extends Component {
state={
  todoList:[],
  userInput:'',
  inProgress:[],
  completed:[],
}

 onChange(input){  
   this.setState({
     userInput: input,
   });
 }

 addList(input){
   let mylist= this.state.todoList;
   mylist.push(input);
   this.setState({
     todoList: mylist
   });
 }
deleteList(id){
  const mylist=this.state.todoList;
  //const updateList= mylist.filter(list =>list.id !==id);
  mylist.splice(id, 1)
  this.setState({
    todoList: mylist,
  })
}

onDragOver =(e)=>{
  e.preventDefault();
}

  render() {
    return (
      <div>
      
      <h1>To-Do-List</h1>
      <div className="toppart">
      <input onChange={(e)=>this.onChange(e.target.value)} type="text" placeholder=".......Enter your to-do list item......."></input>
      <button onClick={()=>this.addList(this.state.userInput)}>Submit</button> <br /><br />
      </div>  

      <div className="full">

      <div className="firstbox">  
      <h2>ToDoList</h2>  <hr />   
        {this.state.todoList.map((list, index)=>{
          return(
            <div className="list"><li key={Math.random()}>
          {list} &nbsp;
            <button className="cross" onClick={()=>this.deleteList(index)}>x</button>            
            </li></div>)
        })}       
      </div>

        <div className="secondbox" onDragOver={(e)=>this.onDragOver(e)}>
        <h2>In Progress</h2> <hr />
        <li>iaiai</li>
        </div>

        <div className="thirdbox">
        <h2>Completed</h2> <hr />
        <li>iaiai</li>
        </div>

      </div>
      </div>
    );
  }
}

export default App;