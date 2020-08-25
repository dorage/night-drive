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
    width: ${(props) => props.width};
    height: ${(props) => props.height};
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

    @media (max-width: ${screen.desktopS}) {
        font-size: 16px;
    }
`;

const Nav = styled.div`
    margin: 0 15px;

    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: 0.5s;

    :hover {
        color: rgb(255, 0, 255);
        font-size: 16px;
    }

    @media (max-width: ${screen.desktopS}) {
        font-size: 24px;
        :hover {
            color: rgb(255, 0, 255);
            font-size: 24px;
        }
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
    z-index: 99;

    display: none;
    flex-direction: row-reverse;
    align-items: center;

    background-color: ${(props) =>
        props.bgVisible ? cssColor.program.blue : 'transparent'};
    border-width: 3px;
    border-style: solid;
    border-top-color: ${(props) =>
        props.bgVisible ? cssColor.program.lightBorder : 'transparent'};
    border-left-color: ${(props) =>
        props.bgVisible ? cssColor.program.lightBorder : 'transparent'};
    border-right-color: ${(props) =>
        props.bgVisible ? cssColor.program.darkGrey : 'transparent'};
    border-bottom-color: ${(props) =>
        props.bgVisible ? cssColor.program.darkGrey : 'transparent'};

    @media (max-width: ${screen.desktopS}) {
        display: flex;
    }
`;
const MobileNavModal = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding: 25% 0;
    z-index: 98;

    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${cssColor.program.grey};
`;

const Router = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const copyText = () => {
        var copyText = document.getElementById('email');

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand('copy');

        /* Alert the copied text */
        alert('이메일 복사 완료!');
    };
    const linkGithub = () => {
        window.open('https://github.com/dorage', '_blank');
    };
    return (
        <HashRouter>
            {/* mobile */}
            <MobileNavBar bgVisible={displayModal}>
                <RetroButton
                    width={'35px'}
                    height={'35px'}
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    <FontAwesomeIcon
                        icon={displayModal ? faTimes : faBars}
                        color={displayModal ? 'black' : 'white'}
                    />
                </RetroButton>
            </MobileNavBar>
            <MobileNavModal display={displayModal}>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/profile"
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    <Nav>Profile</Nav>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/project"
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    <Nav>Project</Nav>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/stack"
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    <Nav>Stack</Nav>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/tattoo"
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    <Nav>Tattoo</Nav>
                </Link>
                <Email id="email" value="baloonflower554@gmail.com" />
                <span />
                <div>
                    <RetroButton width="120px" height="40px" onClick={copyText}>
                        Email
                    </RetroButton>
                    <RetroButton
                        width="120px"
                        height="40px"
                        onClick={linkGithub}
                    >
                        Github
                    </RetroButton>
                </div>
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
                    <RetroButton width="110px" height="40px" onClick={copyText}>
                        Email
                    </RetroButton>
                    <RetroButton
                        width="110px"
                        height="40px"
                        onClick={linkGithub}
                    >
                        Github
                    </RetroButton>
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
