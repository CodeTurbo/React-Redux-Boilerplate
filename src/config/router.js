import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import SignUp from '../components/signup';
import SignIn from '../components/signin';
import ProfileStudent from '../components/profile-student';
import MarksStudent from '../components/marks-student';
import HomeStudent from '../components/home-student';
import VacancyStudent from '../components/vacancy-student';
import HomeCompany from '../components/home-company';
import ProfileCompany from '../components/profile-company';
import VacancyCompany from '../components/vacancy-company';
import Applied from '../components/applied';
import Admin from '../components/admin';

class router extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/profile-student" component={ProfileStudent} />
                    <Route exact path="/marks-student" component={MarksStudent} />
                    <Route exact path="/home-student" component={HomeStudent} />
                    <Route exact path="/vacancy-student" component={VacancyStudent} />
                    <Route exact path="/home-company" component={HomeCompany} />
                    <Route exact path="/profile-company" component={ProfileCompany} />
                    <Route exact path="/vacancy-company" component={VacancyCompany} />
                    <Route exact path="/applied" component={Applied} />
                    <Route exact path="/admin" component={Admin} />
                </div>
            </Router>
        );
    }
}

export default router;