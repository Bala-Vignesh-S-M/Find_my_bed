import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import Error from './Error';
import Adminlog from './admin';
import Districts from './Districts';
import {Ariyalur, Chengalpattu, Chennai, Coimbatore, Cuddalore, Dharmapuri, Dindigul, Erode, Kallakurichi, Kanchipuram, Kanyakumari, Karur, Krishnagiri, Madurai, Nagapattinam, Namakkal, Nilgiris, Perambalur, Pudukkottai, Ramanathapuram, Ranipet, Salem, Sivaganga, Tenkasi, Thanjavur, Theni, Thoothukudi, Tiruchirappalli, Tirunelveli, Tirupathur, Tiruppur, Tiruvallur, Tiruvannamalai, Tiruvarur, Vellore, Viluppuram, Virudhunagar} from './Hospitals' 
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/admin'>
          <Adminlog />
        </Route>
        <Route exact path='/Districts'>
          <Districts />
        </Route>
        <Route exact path='/Ariyalur'>
          <Ariyalur />
        </Route>
        <Route exact path='/Chengalpattu'>
          <Chengalpattu />
        </Route>
        <Route exact path='/Chennai'>
          <Chennai />
        </Route>
        <Route exact path='/Coimbatore'>
          <Coimbatore />
        </Route>
        <Route exact path='/Cuddalore'>
          <Cuddalore />
        </Route>
        <Route exact path='/Dharmapuri'>
          <Dharmapuri />
        </Route>
        <Route exact path='/Dindigul'>
          <Dindigul />
        </Route>
        <Route exact path='/Erode'>
          <Erode />
        </Route>
        <Route exact path='/Kallakurichi'>
          <Kallakurichi />
        </Route>
        <Route exact path='/Kanchipuram'>
          <Kanchipuram />
        </Route>
        <Route exact path='/Kanyakumari'>
          <Kanyakumari />
        </Route>
        <Route exact path='/Karur'>
          <Karur />
        </Route>
        <Route exact path='/Krishnagiri'>
          <Krishnagiri />
        </Route>
        <Route exact path='/Madurai'>
          <Madurai />
        </Route>
        <Route exact path='/Nagapattinam'>
          <Nagapattinam />
        </Route>
        <Route exact path='/Namakkal'>
          <Namakkal />
        </Route>
        <Route exact path='/Nilgiris'>
          <Nilgiris />
        </Route>
        <Route exact path='/Perambalur'>
          <Perambalur />
        </Route>
        <Route exact path='/Pudukkottai'>
          <Pudukkottai />
        </Route>
        <Route exact path='/Ramanathapuram'>
          <Ramanathapuram />
        </Route>
        <Route exact path='/Ranipet'>
          <Ranipet />
        </Route>
        <Route exact path='/Salem'>
          <Salem />
        </Route>
        <Route exact path='/Sivaganga'>
          <Sivaganga />
        </Route>
        <Route exact path='/Tenkasi'>
          <Tenkasi />
        </Route>
        <Route exact path='/Thanjavur'>
          <Thanjavur />
        </Route>
        <Route exact path='/Theni'>
          <Theni />
        </Route>
        <Route exact path='/Thoothukudi'>
          <Thoothukudi />
        </Route>
        <Route exact path='/Tiruchirappalli'>
          <Tiruchirappalli />
        </Route>
        <Route exact path='/Tirunelveli'>
          <Tirunelveli />
        </Route>
        <Route exact path='/Tirupathur'>
          <Tirupathur />
        </Route>
        <Route exact path='/Tiruppur'>
          <Tiruppur />
        </Route>
        <Route exact path='/Tiruvallur'>
          <Tiruvallur />
        </Route>
        <Route exact path='/Tiruvannamalai'>
          <Tiruvannamalai />
        </Route>
        <Route exact path='/Tiruvarur'>
          <Tiruvarur />
        </Route>
        <Route exact path='/Vellore'>
          <Vellore />
        </Route>
        <Route exact path='/Viluppuram'>
          <Viluppuram />
        </Route>
        <Route exact path='/Virudhunagar'>
          <Virudhunagar />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
