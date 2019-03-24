import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {MovieDetail} from './MovieDetail';
import Collections from './Collections'
import './index.css';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path={'/movie/:id'} component={MovieDetail} />
          <Route path={'/'} component={Home} />
          <Route path={'/collections'} component={Collections} />
          <Route component ={props => <p>  UPPSS!! Error 404, página no existe</p>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
