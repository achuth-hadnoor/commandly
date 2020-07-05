import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about' 
import login from "./pages/login";
import settings from "./pages/settings";
function App() {
  return (
   <Router>
     <div style={{display:'flex',flexDirection:'column',padding:10}}>
     <Link to="/">Home</Link>
     <Link to="/about">about</Link>
     <Link to="/settings">settings</Link>
     <Link to="/MindHq">to workspace</Link>
     <Link to="/MindHQ/onboarding">to space</Link>
     <Link to="/MindHQ/onboarding/snippet1">to space snippets</Link>
     </div>
      <Switch> 
          <Route exact path={["/:wid","/:wid/:sid","/:wid/:sid/:cid"]} component={About}/> 
          <Route exact path="/" component={Home}/> 
          <Route exact path="/login" component={login}/> 
          <Route exact path="/settings" component={settings}/> 
        </Switch>
   </Router>
  );
}

export default App;
