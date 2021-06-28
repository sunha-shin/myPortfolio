import React from 'react'
import styled from 'styled-components';
import {Overlay} from "../components/Layout.Styled";
import {appData} from "../data";

const Visual = () => {
    return (
        <Container name={'home'}>
            <Overlay alpha={0.3}/>
            <Contents>
                <h1>{appData.visual.slogan}</h1>

            </Contents>
        </Container>
    )
}

const Container = styled.div`
  background: url(https://images.unsplash.com/photo-1549082969-62ab24fa9d7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) 50% / cover no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 40px;
    line-height: 1.6;
    white-space: pre-wrap;  // 역슬래시 줄바꿈
  }

`;

export default Visual;