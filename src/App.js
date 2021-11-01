import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Home/Services/Services';
import Gallery from './pages/Home/Gallery/Gallery';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import ContactUs from './pages/Home/ContactUs/ContactUs';
import Booking from './pages/Home/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
