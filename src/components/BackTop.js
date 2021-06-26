import React from 'react'
import styled from 'styled-components';
import {Color} from "../styled/Theme";
import {animateScroll as scroll} from 'react-scroll'

const BackTop = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration:500
        });
    };

    return (
        <Container onClick={scrollToTop}>
            TOP
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  right: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  text-transform: uppercase;
  background: ${Color.Primary};
  color: #fff;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${Color.Primary};
  }
`;


export default BackTop;