
import React from 'react';
import { string, any } from 'prop-types';
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

PrivateRoute.propTypes = {
  component: any,
  authenticated: string
};

export default PrivateRoute;