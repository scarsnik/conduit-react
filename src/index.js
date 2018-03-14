import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Article from './components/Article'
import Editor from './components/Editor';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Register from './components/Register';
import Settings from './components/Settings';

import store from './store';
import './index.css';

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/settings" component={Settings} />
                <Route path="/article/:id" component={Article} />
                <Route path="/@:username" component={Profile} />
                <Route path="/@:username/favorites" component={ProfileFavorites} />
                <Route path="/editor" component={Editor} />
                <Route path="/editor/:slug" component={Editor} />
            </div>
        </Router>
        {/* <App /> */}
    </Provider>
), document.getElementById('root'));
