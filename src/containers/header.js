import React from 'react'
import { Header } from '../components'

import * as ROUTES from '../constants/routers'

export function HeaderContainer({ showBackgorund, children, signInVisible }) {
    return (
        <Header >
            <Header.Container >
                <Header.Logo to={ROUTES.HOME} src='/images/misc/logo.svg' alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN} signInVisible={signInVisible} >Sign In </Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    )
}