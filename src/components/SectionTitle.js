import React from 'react'
import styled from 'styled-components';

const SectionTitle = ({title, description}) => {
    return (
        <Container>
            <h2>{title}</h2>
            {
                description &&
                <p>{description}</p>
            }
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 70px;
  text-align: center;

  h2 {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #797979;
    white-space: pre-wrap;
    line-height: 1.6;
  }
`;

export default SectionTitle;