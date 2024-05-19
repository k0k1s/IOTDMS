import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddDevice from './components/AddDevice';
import DeviceDetails from './components/DeviceDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/add-device" component={AddDevice} />
                    <Route path="/device/:id" component={DeviceDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
