import React from 'react'
import { Profile } from '../components'

export function ProfileContainer({ setProfile }) {
    
    const handleClick = function handleClick(event) {
        setProfile({
            displayName: "Tarek",
            photoURL: "2"
        })
    }

    return (
        <>
            <Profile>
                <Profile.Title>Who's watching</Profile.Title>

                <Profile.List>
                    <Profile.Item onClick={handleClick}>
                        <Profile.Picture src={2} />
                        <Profile.Name>{"Tarek"}</Profile.Name>
                    </Profile.Item>
                </Profile.List>
            </Profile>
        </>
    )
}