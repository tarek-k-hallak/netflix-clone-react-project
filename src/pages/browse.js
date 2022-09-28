import React from 'react'
import { useContent } from '../hooks'
import { selectionMap } from '../utils'

import { BrowseContainer } from '../containers/browse'
import { FooterContainer } from '../containers/footer'


export default function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionMap({ series, films })

    return (
        <>
            <BrowseContainer slides={slides} />
            <FooterContainer />
        </>
    )
}


//TODO:
// wrap browse with Context
// useState for seriesReadya
// useState for filmsReadt
// condation rendering for main Browse page triggerd the last 2 state
// change state using useEffect that watch the last 2 state