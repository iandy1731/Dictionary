import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import { store } from './store';

const App = () => {
    return (
        <div className="wraper">
            <div className="container">
                <Provider store={store}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/result" component={Result} />    
                        </Switch>
                </Provider>
            </div>
        </div>
    );
};

export default App;
