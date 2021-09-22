import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Topnav from "./components/Topnav/Topnav";
import Settings from "./components/Settings/Settings";
import Keywords from "./components/Keywords/Keywords";
import Inbox from "./components/Inbox/Inbox";
import Landing from "./components/Landing/Landing";
import { myContext } from "./Context";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const userObj = useContext(myContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Topnav />
          {userObj === "nouser" ? <Redirect to="/login" /> : null}
        </Route>
        <Route exact path="/inbox">
          <Navbar />
          <Topnav />
          {userObj !== "nouser" ? <Inbox /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/keywords">
          <Navbar />
          <Topnav />
          {userObj !== "nouser" ? <Keywords /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/settings">
          <Navbar />
          <Topnav />
          {userObj !== "nouser" ? <Settings /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
