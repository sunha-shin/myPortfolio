import React from 'react'
import styled from 'styled-components';

const List = ({data = [], renderItem}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item) => (
                        <Col key={item.title}>
                            {renderItem(item)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 15px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 15px;
`;

export default List;