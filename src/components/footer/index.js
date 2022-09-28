import React from 'react'
import { Container, Title, Row, Column, Link, Text, Select, Option, Break } from './styles/footer'


export default function Footer({ children, ...resProps }) {
    return (
        <Container {...resProps}>
            {children}
        </Container>
    )
}

Footer.Title = function FooterTitle({ children, ...resProps }) {
    return (
        <Title {...resProps}>
            {children}
        </Title>
    )
}

Footer.Row = function FooterRow({ children, ...resProps }) {
    return (
        <Row {...resProps}>
            {children}
        </Row>
    )
}

Footer.Column = function FooterColumn({ children, ...resProps }) {
    return (
        <Column {...resProps}>
            {children}
        </Column>
    )
}

Footer.Text = function FooterText({ children, ...resProps }) {
    return (
        <Text {...resProps}>
            {children}
        </Text>
    )
}

Footer.Link = function FooterLink({ children, ...resProps }) {
    return (
        <Link {...resProps}>
            {children}
        </Link>
    )
}

Footer.Select = function FooterSelect({ children, ...resProps }) {
    return (
        <Select {...resProps}>
            {children}
        </Select>
    )
}

Footer.Option = function FooterOption({ children, ...resProps }) {
    return (
        <Option {...resProps}>
            {children}
        </Option>
    )
}

Footer.Break = function FooterBreak({ ...resProps }) {
    return (
        <Break {...resProps} />
    )
}
