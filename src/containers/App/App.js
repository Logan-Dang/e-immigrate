import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from '../../compositions/Admin/Admin.js';
import AdminDashboard from '../../containers/AdminDashboard/AdminDashboard';
import EditQuestionnaires from '../../containers/EditQuestionnaires/EditQuestionnaires';
import './App.css';
import { uploadQuestinnaires } from '../../sendRequest/apis';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/dashboard">
                        <AdminDashboard />
                    </Route>
                    <Route path="/login">
                        <Admin />
                    </Route>
                    <Route path="/questionnaires">
                        <EditQuestionnaires />
                    </Route>
                    <Route path="/">
                        <MainContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
