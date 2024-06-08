import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddDevice from './pages/AddDevice';
import DeviceDetails from './pages/DeviceDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/add-device" component={AddDevice} />
                <Route path="/device-details/:id" component={DeviceDetails} />
                <Route path="/" component={Login} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
