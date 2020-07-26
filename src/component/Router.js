import React, { useState } from 'react';
import { Switch, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Profile from '../router/Profile';
import Project from '../router/Project';
import Stack from '../router/Stack';
import Tattoo from '../router/Tattoo';
import { cssColor, device, screen, Assets } from '../config';

// 모바일 화면 메뉴아이콘 / 메뉴 오버레이 추가
// alert -> 올드 윈도우 모달로 변경
// stack 디자인 변경 ( 리스트 형식으로 )
// project 디자인 생각해보기
// stack 아이콘 만들기
const NavBar = styled.div`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${cssColor.program.grey};

    border: 3px solid;
    border-color: ${cssColor.program.darkGrey};

    @media (max-width: ${screen.desktopS}) {
        display: none;
    }
`;

const NavGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

const RetroButton = styled.button`
    background-color: ${cssColor.program.grey};
    color: black;
    text-align: center;
    width: 110px;
    height: 40px;
    font-size: 14px;
    line-height: 0px;
    cursor: pointer;

    margin-left: 10px;

    border-style: solid;
    border-width: 3px;
    border-top-color: ${cssColor.program.lightBorder};
    border-left-color: ${cssColor.program.lightBorder};
    border-right-color: ${cssColor.program.darkBorder};
    border-bottom-color: ${cssColor.program.darkBorder};

    outline: none;

    :active {
        border-style: none;
        outline: none;
    }
`;

const Nav = styled.div`
    margin: 0 10px;

    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: 0.5s;

    :hover {
        color: rgb(255, 0, 255);
        font-size: 16px;
    }
`;
const Email = styled.input`
    display: none;
`;

const MobileNavBar = styled.div`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 50px;
    padding: 5px 20px;
    z-index: 4;

    display: none;
    flex-direction: column;
    justify-content: center;

    background-color: transparent;

    @media (max-width: ${screen.desktopS}) {
        display: flex;
    }
`;
const MobileNavModal = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;

    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;
`;

const Icon = styled.div`
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: none;
    background-position: center;

    width: 40px;
    height: 40px;

    @media (min-width: ${screen.desktopS}) {
        display: none;
    }
`;

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById('email');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand('copy');

    /* Alert the copied text */
    alert('이메일 복사 완료!');
}

const Router = () => {
    const [displayModal, setDisplayModal] = useState(true);
    return (
        <HashRouter>
            {/* mobile */}
            <MobileNavBar>
                <FontAwesomeIcon
                    icon={displayModal ? faTimes : faBars}
                    color={displayModal ? 'black' : 'white'}
                    size="lg"
                    onClick={() => setDisplayModal(!displayModal)}
                />
            </MobileNavBar>
            <MobileNavModal display={displayModal}>
                <Link style={{ textDecoration: 'none' }} to="/profile">
                    <Nav>Profile</Nav>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/project">
                    <Nav>Project</Nav>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/stack">
                    <Nav>Stack</Nav>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/tattoo">
                    <Nav>Tattoo</Nav>
                </Link>
                <Email id="email" value="baloonflower554@gmail.com" />
                <RetroButton onClick={copyText}>Email</RetroButton>
                <a href="https://github.com/dorage" target="popup">
                    <RetroButton>Github</RetroButton>
                </a>
            </MobileNavModal>
            {/* web */}
            <NavBar>
                <NavGroup>
                    <Link style={{ textDecoration: 'none' }} to="/profile">
                        <Nav>Profile</Nav>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/project">
                        <Nav>Project</Nav>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/stack">
                        <Nav>Stack</Nav>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/tattoo">
                        <Nav>Tattoo</Nav>
                    </Link>
                    <Email id="email" value="baloonflower554@gmail.com" />
                    <RetroButton onClick={copyText}>Email</RetroButton>
                    <a href="https://github.com/dorage" target="popup">
                        <RetroButton>Github</RetroButton>
                    </a>
                </NavGroup>
            </NavBar>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/profile" />
                </Route>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/stack" component={Stack} />
                <Route exact path="/tattoo" component={Tattoo} />
                <Route path="*">
                    <div>404 nothing~</div>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default Router;
