import React from 'react'
import { Container, Text, Pane, Input, Buttom } from './styles/opt-form'

export default function OptForm({ children, ...resProps }) {
    return (
        <Container {...resProps}>
            {children}
        </Container>
    )
}

OptForm.Text = function OptFormText({ children, ...resProps }) {
    return (
        <Text {...resProps}>
            {children}
        </Text>
    )
}

OptForm.Pane = function OptFormPane({ children, ...resProps }) {
    return (
        <Pane {...resProps}>
            {children}
        </Pane>
    )
}


OptForm.Input = function OptFormInput({ ...resProps }) {
    return (
        <Input {...resProps} />
    )
}


OptForm.Buttom = function OptFormButtom({ children, ...resProps }) {
    return (
        <Buttom {...resProps}>
            {children}
            <img src='/images/icons/chevron-right.png' alt='Try Now' />
        </Buttom>
    )
}