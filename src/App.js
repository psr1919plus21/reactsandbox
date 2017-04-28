import React, {Component} from 'react';
import Header from './Header';
import Registrationform from './Registrationform';
import Refs from './Refs';
import './App.css';


const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/posts',
    label: 'Posts'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  }

];

const currentUser = {
  name: 'Egor',
  age: 144,
  ololo: 21
}

const users = [currentUser, currentUser, currentUser];



export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Header items={menu} type={'video'} user={currentUser} users={users} />
        <Registrationform />
        <Refs / >
      </div>
    )
  }
}
