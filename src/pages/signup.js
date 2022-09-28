import React from 'react'
import { SignUpContainer } from '../containers/signup'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Signup() {
    console.log("Sign Up Rendered")

    return (
        <>
            <HeaderContainer>
                <SignUpContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}