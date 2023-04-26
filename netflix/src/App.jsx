import "./app.scss"
import Home from "../src/pages/Home/Home"
import Watch from "../src/pages/watch/Watch";
import Register from "../src/pages/register/Register"
import Login from "../src/pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="register" />}
        </Route>
        <Route exact path="/register">
          {user ? <Register /> : <Redirect to="/" />}
          <Register />
        </Route>
        <Route exact path="/login">
          {user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
  // return <Watch />
  // return <Register/>
  // return <Login/>

};

export default App;