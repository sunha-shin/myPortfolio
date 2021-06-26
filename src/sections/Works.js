import React from 'react'
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../components/Layout.Styled";
import {appData} from "../data";
import SectionTitle from "../components/SectionTitle";
import List from "../components/List";
import WorkItem from "../components/WorkItem";

const Works = () => {

    const renderItem = (item) => <WorkItem item={item}/>;

    return (
        <Container grey name={'works'}>
            <ContentContainer>
                <SectionTitle
                    title={appData.work.title}
                    description={appData.work.description}
                />
                <List
                    data={appData.work.list}
                    renderItem={renderItem}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Works;