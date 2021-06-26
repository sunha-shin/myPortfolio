import React from 'react'
import styled from 'styled-components';
import {SectionContainer} from "../components/Layout.Styled";
import {appData} from "../data";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
    return (
        <Container name={'skills'}>
            <SectionTitle
                title={appData.skills.title}
                description={appData.skills.description}
            />
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Skills;