import React, {Component} from 'react';
import Header from './Header';
import Registrationform from './Registrationform';
import Refs from './Refs';
import Contacts from './Contacts';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router';



const menu = [
  {
    link: '/refs',
    label: 'Refs'
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
        <div>
          <Route path="/refs" component={Refs} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </div>
    )
  }
}
