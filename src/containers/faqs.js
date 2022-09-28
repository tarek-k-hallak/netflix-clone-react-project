import React from 'react'
import { Accordion, OptForm } from '../components'

import faqData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {
                    faqData.map(item => (
                        <Accordion.Item key={item.id} >
                            <Accordion.Header >{item.header}</Accordion.Header>
                            <Accordion.Body >{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion.Frame>

            <OptForm>
                <OptForm.Pane>
                    <OptForm.Text> Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                </OptForm.Pane>
                <OptForm.Pane>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Buttom> Try it now </OptForm.Buttom>
                </OptForm.Pane>
            </OptForm>

        </Accordion>
    )
}