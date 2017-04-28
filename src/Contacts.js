import React, {Component} from 'react';
import Header from './Header';
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


export default class Contacts extends Component {
  render () {
    return (
      <div className="container">
        <Header items={menu} type={'video'} user={currentUser} users={users} />
        <h1>Contacts</h1>
      </div>
    )
  }
}
