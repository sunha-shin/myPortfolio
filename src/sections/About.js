import React from 'react'
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../components/Layout.Styled";
import SectionTitle from "../components/SectionTitle";
import {appData} from "../data";

const About = () => {
    return (
        <Container name={'about'}>
            <ContentContainer>
                <SectionTitle
                    title={appData.about.title}
                    description={appData.about.description}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default About;