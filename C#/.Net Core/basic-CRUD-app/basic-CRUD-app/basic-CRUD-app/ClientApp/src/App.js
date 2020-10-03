import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';
import { User } from './components/User';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/users' component={UsersList} />
                <Route path='/users/:userId' component={User} />
            </Layout>
        );
    }
}
