import Tabs from './tabs'
import Input from '../extends/input'
import List from './list'
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    
    render () {
        return (
            <div className="container">
              <div className="text-center" >
                <span className="navbar-brand text-white">Todo List App</span>
              </div>
              <Tabs tabSelected = "ALL"/>
              <div className="main container rounded p-3">
                <form className="form-group mb-5">
                  <Input
                        type="text"
                        className="form-control mb-2"
                        placeholder="What do you want to do?"
                        name="input"
                  />
                  <label htmlFor="#input">
                    <em>
                      Press <code>Enter</code> to save
                    </em>
                  </label>
                </form>
                <List/>
              </div>
            </div>
          );
    }
  }

 
  
  export default Todo;