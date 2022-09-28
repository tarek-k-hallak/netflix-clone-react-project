import React, { useState, useEffect, createRef } from 'react'
import Fuse from 'fuse.js'
import { signOut } from 'firebase/auth'
import { auth } from '../context/firebase'

import { Header, Loading, Card, Player } from '../components'
import { ProfileContainer } from './profile'

import * as ROUTES from '../constants/routers'

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({
        displayName: "",
        photoURL: ""
    })
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState()
    const cardsContainer = createRef()
    const [loading, setLoading] = useState(false)
    const [isContensReady, setIsContensReady] = useState(false)
    const [slideRows, setSlideRows] = useState([])


    useEffect(() => {
        if (profile.displayName) {
            setLoading(true)
        }

        if (slideRows.length > 0) {
            setTimeout(() => {
                setIsContensReady(true)
                setLoading(false)
            }, 2000);
        }
    }, [profile])

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        if (slideRows.length > 0 && searchTerm.length >= 3) {
            const fuse = new Fuse(slideRows, { keys: ['data.title', 'data.description', 'data.genre'] })
            const results = fuse.search(searchTerm).map(({ item }) => item)
            if (results.length > 0) {
                setSlideRows(results)
            }
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return (
        profile.displayName ?
            <>
                {loading ? <Loading src={2} /> : <Loading.RealeaseBody />}
                {isContensReady &&
                    <>
                        <Header
                            showBackgorund={true}
                            src="joker1"
                            dontShowOnSmallViewPort>
                            <Header.Container>

                                <Header.Group>
                                    <Header.Logo
                                        to={ROUTES.HOME}
                                        src='/images/misc/logo.svg'
                                        alt="Netflix" />

                                    <Header.Link
                                        active={category === 'series' ? true : false}
                                        onClick={() => setCategory("series")}>
                                        Series
                                    </Header.Link>
                                    <Header.Link
                                        active={category === 'films' ? true : false}
                                        onClick={() => setCategory("films")}>
                                        Films
                                    </Header.Link>
                                </Header.Group>

                                <Header.Group>
                                    <Header.Search
                                        searchTerm={searchTerm}
                                        setSearchTerm={setSearchTerm} >
                                    </Header.Search>

                                    <Header.Profile>
                                        <Header.Picture src={profile.photoURL} />
                                        <Header.DropDown>
                                            <Header.Group>
                                                <Header.Link >{profile.displayName}</Header.Link>
                                                <Header.Picture src={profile.photoURL} />
                                            </Header.Group>
                                            <Header.Group>
                                                <Header.Link
                                                    onClick={() => { signOut(auth) }}>
                                                    Sign Out
                                                </Header.Link>
                                            </Header.Group>
                                        </Header.DropDown>
                                    </Header.Profile>
                                </Header.Group>
                            </Header.Container>

                            <Header.CallForAction>
                                <Header.Title>Watch Joker Now</Header.Title>
                                <Header.SubTitle>
                                    Forever alone in a crowd, failed comedian Arthur Fleck seeks
                                    connection as he walks the streets of Gotham City.
                                    Arthur wears two masks -- the one he paints for his day job as
                                    a clown, and the guise he projects in a futile attempt to feel
                                    like he's part of the world around him.
                                    Isolated, bullied and disregarded by society,
                                    Fleck begins a slow descent into madness as he transforms into
                                    the criminal mastermind known as the Joker.
                                </Header.SubTitle>
                                <Header.PlayButton>Play</Header.PlayButton>
                            </Header.CallForAction>
                        </Header>

                        <Card.Group >
                            {slideRows.map((row) => (
                                <Card key={`${category}-${row.title.toLowerCase()}`}>
                                    <Card.Title>{row.title.charAt(0).toUpperCase() + row.title.slice(1)} </Card.Title>
                                    <Card.Entities>
                                        {row.data.map(item => (
                                            <Card.Item key={item.id} item={item}>
                                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                                <Card.Meta>
                                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                                    <Card.Text>{item.description}</Card.Text>
                                                </Card.Meta>
                                            </Card.Item>
                                        ))}
                                    </Card.Entities>
                                    <Card.Feature
                                        category={category}
                                        section={row.title}>
                                        <Player>
                                            <Player.Button />
                                            <Player.Video />
                                        </Player>
                                    </Card.Feature>
                                </Card>
                            ))}
                        </Card.Group>
                    </>
                }
            </>
            :
            <>
                <Header showBackgorund={false} >
                    <Header.Container>
                        <Header.Logo
                            to={ROUTES.HOME}
                            src='/images/misc/logo.svg'
                            alt="Netflix"
                        />
                    </Header.Container>
                </Header>

                <ProfileContainer setProfile={setProfile} />
            </>
    )
}
