import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import {
    Container,
    Overlay,
    Inner,
    Close,
    Button
} from './styles/player'

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps} >{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={(event) => {
            console.log("Parent")
            setShowPlayer(false)
        }}>
            <Inner >
                <video id="media-player" controls onClick={(event) => event.stopPropagation()}>
                    <source src="videos/bunny.mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null;
}


Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)
    return (
        <Button onClick={() => setShowPlayer(!showPlayer)} >
            Play
        </Button>
    )
}
