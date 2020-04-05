import React, { Component } from 'react';
import './App.css';
import UserList from './User/UserList';
import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { name: 'nazar chumbey', year: 1997 },
        { name: 'nazar', year: 1996 },
        { name: 'Oleg', year: 1999 },
        { name: 'Andrey', year: 1998 }
      ],
      currentUsers: [],
      value: ''
    }
  }
  
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const currentUsers = this.state.users.filter((element) => {
        return (element.name === e.target.value || element.year === e.target.value)
      })

      this.setState(
        { currentUsers }
      )
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  handleChangeUsers(useer){
    return useer.map((user, index) => {
      return (
        < UserList className="User"
          key={index}
          id={index}
          name={user.name}
          year={user.year}
        />
      )
    })
  }

  render() {
    let users = null
    if (this.state.currentUsers.length > 0 ) {
      users = this.handleChangeUsers(this.state.currentUsers)
    } else if (this.state.currentUsers.length === 0 || this.state.value === '') {
      users = this.handleChangeUsers(this.state.users)
    } 


    return (
      <div className="App">
        <header>
          <Menu />
          <input type="text" onKeyDown={this._handleKeyDown} onChange={this.handleChange.bind(this)} />
        </header>
        {users}
      </div>
    );
  }
}

export default App;
