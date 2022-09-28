import React, { useState, useRef, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Background,
    Container,
    Logo,
    Group,
    Link,
    ButtonLink,
    CallForAction,
    Title,
    SubTitle,
    PlayButton,
    Search,
    SearchIcon,
    SearchInput,
    Profile,
    DropDown,
    Picture
} from './styles/header'

export default function Header({ showBackgorund = true, children, ...restProps }) {
    return (
        showBackgorund
            ? <Background {...restProps}> {children} </Background>
            : children
    )
}

Header.Container = function HeaderContainer({ children, restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}> {children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <RouterLink to={to}>
            <Logo {...restProps} />
        </RouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ signInVisible = false, children, ...restProps }) {
    return (
        signInVisible &&
        <ButtonLink {...restProps}>{children} </ButtonLink>
    )
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}> {children}</Link>
}

//** Call For Action Lable ***********************************************
Header.CallForAction = function HeaderCallForAction({ children, ...restProps }) {
    return <CallForAction {...restProps}> {children}</CallForAction>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children}</Title>
}

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}> {children}</SubTitle>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}> {children}</PlayButton>
}

//** Search Bar ***********************************************
Header.Search = function HeaderSearch({ SearchTerm, setSearchTerm, children, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)
    const searchBar = useRef(null)

    useEffect(() => {
        function keyDownHandler(event) {
            if (event.key === 'Enter' && searchActive && searchBar.current.value.length >= 3) {
                event.preventDefault();
                window.scroll({
                    top: 600,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
        document.addEventListener('keydown', keyDownHandler)

        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [searchActive])

    return (
        <Search {...restProps}>
            <SearchIcon
                onClick={() => {
                    searchBar.current.disabled = searchActive
                    setSearchActive(!searchActive)
                    searchBar.current.focus()
                }} >
                <img src='/images/icons/search.png' alt='Search' />
            </SearchIcon>
            <SearchInput
                ref={searchBar}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={SearchTerm}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    )
}

//**Profile Drop Down ******************************************
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}> {children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`images/users/${src}.png`} />
}

Header.DropDown = function HeaderPlayDropDown({ children, ...restProps }) {
    return <DropDown {...restProps}> {children}</DropDown>
}
