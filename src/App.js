import React from 'react'
import styled from 'styled-components';
import Header from "./components/Header";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import Visual from "./sections/Visual";
import {GlobalStyle} from "./styled/GlobalStyle";
import BackTop from "./components/BackTop";

const App = () => {
    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Visual/>
            <About/>
            <Works/>
            <Skills/>
            <Footer/>
            <BackTop/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;