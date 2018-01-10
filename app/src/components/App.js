import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Spinner from './Spinner.svg';

import { pageOne, pageTwo, pageThree } from './pages';

class App extends Component {
  componentDidMount(){
    let { getUsers } = this.props;
    getUsers();
  }
  render() {
    let { loaded, data } = this.props.users;

    if( loaded === true ){
      return (
        <div className="App">
         <Helmet>
            {
              // https://github.com/nfl/react-helmet
            }
            <html lang="en" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Main Component</title>
          </Helmet>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="AppNavigation">
            <NavLink activeClassName="active" className="AppNavigation__links" to="/page1">Page1</NavLink>
            <NavLink activeClassName="active" className="AppNavigation__links" to="/page2">Page2</NavLink>
            <NavLink activeClassName="active" className="AppNavigation__links" to="/page3">Page3</NavLink>
          </div>
          <ul>
            {

            }
          </ul>
          <Switch>
            <Route path="/page1" component={pageOne}/>
            <Route path="/page2" component={pageTwo}/>
            <Route path="/page3" component={pageThree}/>
          </Switch>

        </div>
      );
    } else {
      return(<div className="wv"><img src={Spinner}/></div>);
    }
  }
}

export default App;
