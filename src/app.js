import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routers'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

import { Home, Signin, Signup, Browse } from './pages'

function App() {
    console.log("App")
    const { user } = useAuthListener()

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    )
}

export default App;
