import React from "react";
import Header from "./Header";
import MasterPost from "./MasterPost";
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';

function App(props){
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={MasterPost} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
