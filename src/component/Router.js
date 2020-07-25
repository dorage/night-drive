import React from 'react';
import { Switch, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../router/Profile';
import Project from '../router/Project';
import Stack from '../router/Stack';
import Tattoo from '../router/Tattoo';
import { cssColor } from '../config';

const NavBar = styled.div`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    width: 100px;
    height: 40px;
    font-size: 24px;
    line-height: 0px;
    cursor: pointer;

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

const NavM = styled.div`
    margin: 0 10px;

    font-size: 24px;
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
    return (
        <HashRouter>
            <NavBar>
                <NavGroup></NavGroup>
                <NavGroup>
                    <Link style={{ textDecoration: 'none' }} to="/profile">
                        <NavM>Profile</NavM>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/project">
                        <NavM>Project</NavM>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/stack">
                        <NavM>Stack</NavM>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/tattoo">
                        <NavM>Tattoo</NavM>
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
                    <Redirect to="/tattoo" />
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
