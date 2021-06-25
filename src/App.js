import React from 'react'
import styled from 'styled-components';
import Header from "./components/Header";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Container>
            <Header/>
            <About/>
            <Works/>
            <Skills/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;