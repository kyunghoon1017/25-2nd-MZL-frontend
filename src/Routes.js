import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/main/Main';
import Flightschedule from './components/Flightschedule/Flightschedule';
import ProductList from './components/ProductList/ProductList';
import MainCityList from './pages/maincitylist/MainCityList';
import Login from './pages/Login/Login';
import Flightmainpage from './pages/flightmainpage/Flightmainpage';
import Cart from './components/Cart/Cart';
import Booking from './pages/booking/Booking';
import Payment from './pages/Payment/Payment';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/fs" component={Flightschedule} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/maincitylist" component={MainCityList} />
          <Route exact path={['/login', '/signup']} component={Login} />
          <Route exact path="/air" component={Flightmainpage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/reservations" component={Booking} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
