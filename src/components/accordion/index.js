import React, { useState, useContext, createContext } from 'react'
import { Container, Inner, Title, Frame, Item, Header, Body } from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({ children, ...resProps }) {
    return (
        <Container {...resProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}


Accordion.Title = function AccordionTitle({ children, ...resProps }) {
    return (
        <Title {...resProps}>
            {children}
        </Title>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...resProps }) {
    return (
        <Frame {...resProps}>
            {children}
        </Frame>
    )
}


Accordion.Item = function AccordionItem({ children, ...resProps }) {
    const [toggleShow, SetToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, SetToggleShow }}>
            <Item {...resProps}>
                {children}
            </Item>
        </ToggleContext.Provider>
    )
}


Accordion.Header = function AccordionHeader({ children, ...resProps }) {
    const { toggleShow, SetToggleShow } = useContext(ToggleContext)

    return (
        <Header onClick={() => SetToggleShow(!toggleShow)} {...resProps}>
            {children}
            {
                toggleShow
                    ? <img src='/images/icons/close-slim.png' alt='Close' />
                    : <img src='/images/icons/add.png' alt='Open' />
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...resProps }) {
    const { toggleShow } = useContext(ToggleContext)

    return (
        toggleShow ?
            <Body {...resProps}> {children} </Body>
            : null
    )
}

