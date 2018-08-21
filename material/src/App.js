import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuAppBar from './MenuAppBar';
import PageContent from './components/PageContent';
import MiniDrawer from './components/MiniDrawer';
import Inbox from './components/Inbox';
import Drafts from './components/Drafts';

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                    <MiniDrawer>
                <Switch>
                    <Route exact path="/" component={Inbox} />
                    <Route path="/drafts" component={Drafts} />
                </Switch>
                </MiniDrawer>
            </Router>


        </div>
    );
  }
}

export default App;
