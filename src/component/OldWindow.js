import React from 'react';
import styled from 'styled-components';
import { cssColor } from '../config';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cssColor.program.grey};
    padding: 5px;
    width: 30%;
    height: 500px;
    margin: 150px auto;

    border-style: solid;
    border-width: 5px;
    border-top-color: ${cssColor.program.lightBorder};
    border-left-color: ${cssColor.program.lightBorder};
    border-right-color: ${cssColor.program.darkBorder};
    border-bottom-color: ${cssColor.program.darkBorder};
`;

const NameSector = styled.div`
    display: flex;
    background-color: ${cssColor.program.blue};
    font-size: 36px;
    padding: 5px;
    margin-bottom: 20px;
    justify-content: space-between;
`;
const Name = styled.div``;
const Button = styled.button`
    background-color: ${cssColor.program.grey};
    color: black;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 36px;
    line-height: 0px;
    cursor: pointer;

    border-style: solid;
    border-width: 3px;
    border-top-color: ${cssColor.program.lightBorder};
    border-left-color: ${cssColor.program.lightBorder};
    border-right-color: ${cssColor.program.darkBorder};
    border-bottom-color: ${cssColor.program.darkBorder};

    :active {
        border-style: none;
    }
`;
const ContentSector = styled.div`
    border: inherit;
    background-color: inherit;
    border-width: 3px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

class OldWindow extends React.Component {
    render() {
        const { title, children, onClickExitButton } = this.props;
        return (
            <Container>
                <NameSector>
                    <Name>{title}</Name>
                    <Button onClick={onClickExitButton}>x</Button>
                </NameSector>
                <ContentSector>{children}</ContentSector>
            </Container>
        );
    }
}

export default OldWindow;
