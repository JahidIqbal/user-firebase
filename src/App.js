import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Login from './components/Login/Login';

function App() {
  return (
    <div className="container ">
      <AuthProvider>
        <Router>


          <Switch>



            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>

          </Switch>

        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
