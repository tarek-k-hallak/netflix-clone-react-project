import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'

import { Feature, OptForm } from '../components'

export default function Home() {
    console.log("Home Rendered")
    return (
        <>
            <HeaderContainer signInVisible={true}>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.Subtitle>
                </Feature>
                <OptForm>
                    <OptForm.Pane>
                        <OptForm.Text> Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                    </OptForm.Pane>
                    <OptForm.Pane>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Buttom> Try it Now </OptForm.Buttom>
                    </OptForm.Pane>
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />

            <FaqsContainer />

            <FooterContainer />
        </>
    )
}