import React from 'react'
import { Jumbotron } from '../components'

import jumbotronData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumbotronData.map(item => {
                return (
                    <Jumbotron key={item.id} direction={item.direction}>

                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>

                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
                        </Jumbotron.Pane>

                    </Jumbotron>
                )
            })}
        </Jumbotron.Container>
    )
}