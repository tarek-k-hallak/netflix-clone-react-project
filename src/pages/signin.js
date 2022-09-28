import React from 'react'
import { SignInContainer } from '../containers/signin'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Signin() {
    console.log("Sign in Rendered")

    return (
        <>
            <HeaderContainer showBackgorund={false}>
                <SignInContainer />
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}