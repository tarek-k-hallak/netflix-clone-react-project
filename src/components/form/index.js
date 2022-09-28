import React from 'react'
import {
    Container,
    Error,
    Title,
    Base,
    Label,
    Input,
    Pane,
    Button,
    Link,
    Text,
    TextSmall
} from './styles/form'


export default function Form({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Form.Error = function FromError({ children, ...restProps }) {
    return (
        <Error {...restProps}>
            {children}
        </Error>
    )
}

Form.Title = function FromTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Form.Base = function FromBase({ children, ...restProps }) {
    return (
        <Base {...restProps}>
            {children}
        </Base>
    )
}

Form.Label = function FromLabel({ children, ...restProps }) {
    return (
        <Label {...restProps}>
            {children}
        </Label>
    )
}

Form.Input = function FromInput({ children, ...restProps }) {
    return (
        <Input {...restProps} >
            {children}
        </Input>
    )
}

Form.Pane = function FromPane({ children, ...restProps }) {
    return (
        <Pane {...restProps}>
            {children}
        </Pane>
    )
}

Form.Link = function FromLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    )
}

Form.Button = function FromButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children}
        </Button>
    )
}

Form.Text = function FromText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}

Form.TextSmall = function FromTextSmall({ children, ...restProps }) {
    return (
        <TextSmall {...restProps}>
            {children}
        </TextSmall>
    )
}




