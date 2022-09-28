import React from 'react'
import { LockBody, Picture, Spinner, RealeaseBody } from './styles/loading'


export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.RealeaseBody = function LoadingRealeaseBody() {
    return <RealeaseBody />
}