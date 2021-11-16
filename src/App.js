import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import OrderPlace from "./Pages/Home/OrderPlace/OrderPlace";
import ExploreBikes from "./Pages/Home/ExploreBikes/ExploreBikes";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./Pages/Context/AuthProvider";
import PrivateRoute from "./Pages/Home/Login/PrivateRoute/PrivateRoute";
import Register from './Pages/Home/Login/Register/Register';
import UserDashboard from './Pages/Dashboard/UserDashboard/UserDashboard/UserDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/orderplace/:orderId">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <Route path="/explorebikes">
            <ExploreBikes></ExploreBikes>
          </Route>
          <PrivateRoute path="/userdashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
