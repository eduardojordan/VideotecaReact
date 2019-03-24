import React from 'react';
import {Header} from './header';
import {Search} from './SearchFolder/Search';
import {Movies} from './Movies';

export class Home extends React.Component {
  render() {
    return(
    
      <div className="container">
        <Header />
        <Search/>
        <Movies/>
      
      </div>
    )
  }
}
