import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, authenticated}) => {
    return (
        <Route render={() => (
            authenticated ?
                <Redirect to="/game" />
            : <Component />
        )} />
    );
};

export default PublicRoute;