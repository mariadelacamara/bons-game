
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authenticated}) => {
    return (
        <Route render={() => (
            authenticated ?
                <Component />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;