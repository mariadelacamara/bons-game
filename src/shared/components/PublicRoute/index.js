import React from 'react';
import { string, any } from 'prop-types';
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

PublicRoute.propTypes = {
    component: any,
    authenticated: string
  };

export default PublicRoute;