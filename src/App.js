// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import AddService from './component/AddService/AddService';
import ContactUs from './component/ContactUs/ContactUs';
import Home from './component/Home/Home/Home';
import Service from './component/Home/Service/Service';
import ServiceDetails from './component/Home/Service/ServiceDetails/ServiceDetails';
import Login from './component/LogIn/Login';
import ManageAllOrder from './component/ManageAllOrder/ManageAllOrder';
import MyOrder from './component/MyOrder/MyOrder';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import Footer from './component/Shared/Footer/Footer';
import Headers from './component/Shared/Headers/Headers';
import AuthProvider from './context/AuthProvider';
// import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Headers></Headers>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/newservice">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/servicedetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            {/* <PrivateRoute path="/shipping">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageorder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
