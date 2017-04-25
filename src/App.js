import React, {Component} from 'react';
import Header from './Header';


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

export default class App extends Component {
  render () {
    return (
      <div>
        <Header items={menu} type={'video'} user={currentUser} />
      </div>
    )
  }
}
